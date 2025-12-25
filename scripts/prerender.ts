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

    console.log('Processing files for Home page...')
    const files = await Promise.all(rawFiles.map(async (file) => {
        const url = `https://raw.githubusercontent.com/bit-shift-io/the-great-cook-up/main/${file.path}`
        const text = await fetch(url).then(r => r.text())
        const tokens = marked.lexer(text)
        // @ts-ignore
        const tagsToken = tokens.find(t => t?.text?.toLowerCase().startsWith('tags:'))
        if (!tagsToken) return { path: file.path }
        // @ts-ignore
        let tags = tagsToken?.text?.replace('Tags:', '').replace('tags:', '').split(',').map(tag => tag.trim())
        return { path: file.path, tags }
    }))

    const routes: Array<{ path: string, data: any }> = [
        { path: '/', data: { files } }
    ]

    console.log('Fetching detail data for each recipe...')
    for (const file of files) {
        const pathSlug = file.path.replace('.md', '')
        const url = `https://raw.githubusercontent.com/bit-shift-io/the-great-cook-up/main/${file.path}`
        const text = await fetch(url).then(r => r.text())
        const tokens = marked.lexer(text)
        routes.push({
            path: `/${pathSlug}`,
            data: { tokens, recipe: pathSlug }
        })
    }

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
