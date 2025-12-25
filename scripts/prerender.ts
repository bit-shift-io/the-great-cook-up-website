import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getFileList } from '../src/services/github'
import { marked } from 'marked'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p: string) => path.resolve(__dirname, '..', p)

const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8')



const run = async () => {
    // The SSR build result - we assume it's at dist/server/entry-server.mjs
    // @ts-ignore
    const { render } = await import('../dist/server/entry-server.mjs')

    console.log('Fetching file list...')
    const rawFiles = await getFileList()

    const contentDir = toAbsolute('.content')
    const hasLocalContent = fs.existsSync(contentDir)

    console.log('Processing files...')
    const routes: Array<{ path: string, data: any }> = []
    const homeFiles = []

    for (const file of rawFiles) {
        let text: string
        if (hasLocalContent) {
            text = fs.readFileSync(path.join(contentDir, file.path), 'utf-8')
        } else {
            const url = `https://raw.githubusercontent.com/bit-shift-io/the-great-cook-up/main/${file.path}`
            text = await fetch(url).then(r => r.text())
        }

        const tokens = marked.lexer(text)

        // Extract tags for home page list
        // @ts-ignore
        const tagsToken = tokens.find(t => t?.text?.toLowerCase().startsWith('tags:'))
        let tags = []
        if (tagsToken) {
            // @ts-ignore
            tags = tagsToken?.text?.replace('Tags:', '').replace('tags:', '').split(',').map(tag => tag.trim())
        }
        homeFiles.push({ path: file.path, tags })

        // Prepare detail route
        const pathSlug = file.path.replace('.md', '')
        routes.push({
            path: `/${pathSlug}`,
            data: { tokens, recipe: pathSlug }
        })
    }

    routes.unshift({ path: '/', data: { files: homeFiles } })

    console.log(`Starting pre-render of ${routes.length} routes...`)
    for (const route of routes) {
        const appHtml = render(route.path, route.data)
        const html = template
            .replace(`<!--app-html-->`, appHtml)
            .replace(`</head>`, `<script>window.__DATA__ = ${JSON.stringify(route.data)}</script></head>`)

        const filePath = toAbsolute(`dist/client${route.path === '/' ? '/index.html' : `${route.path}/index.html`}`)
        const dir = path.dirname(filePath)
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
        fs.writeFileSync(filePath, html)
        console.log('Pre-rendered:', route.path)
    }
}

run().catch(err => {
    console.error('Pre-render failed:', err)
    process.exit(1)
})
