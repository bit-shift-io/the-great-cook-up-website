import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import { HomeClient } from './components/home-client'
import { RecipeClient } from './components/recipe-client'
import { getFileList } from './services/github'
import { marked } from 'marked'

export default function App({ initialData }: { initialData?: any }) {
    return (
        <Routes>
            <Route path="/" element={<HomeRoute initialData={initialData} />} />
            <Route path="/:recipe" element={<RecipeRoute initialData={initialData} />} />
        </Routes>
    )
}

function HomeRoute({ initialData }: { initialData?: any }) {
    const [data, setData] = React.useState(initialData || (typeof window !== 'undefined' ? (window as any).__DATA__ : null))

    React.useEffect(() => {
        if (!data) {
            const fetchData = async () => {
                let files = await getFileList()
                files = await Promise.all(files.map(async (file) => {
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
                setData({ files })
            }
            fetchData()
        }
    }, [data])

    if (!data) return <div className="p-10 text-center">Loading...</div>
    return <HomeClient files={data.files} />
}

function RecipeRoute({ initialData }: { initialData?: any }) {
    const { recipe } = useParams()
    const [data, setData] = React.useState(initialData || (typeof window !== 'undefined' ? (window as any).__DATA__ : null))

    React.useEffect(() => {
        if (recipe && (!data || data.recipe !== recipe)) {
            const fetchData = async () => {
                const url = `https://raw.githubusercontent.com/bit-shift-io/the-great-cook-up/main/${recipe}.md`
                const text = await fetch(url).then(r => r.text())
                const tokens = marked.lexer(text)
                setData({ tokens, recipe })
            }
            fetchData()
        }
    }, [recipe, data])

    if (!data || data.recipe !== recipe) return <div className="p-10 text-center">Loading recipe...</div>
    return <RecipeClient tokens={data.tokens} />
}
