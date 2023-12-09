import { getFileList } from '../services/github'
import { HomeClient } from './components/home-client'
import { marked } from 'marked'

export default async function Home() {
  let files = await getFileList()

  // pull tags from every recipe, strip down the data we send in files
  files = await Promise.all(files.map(async (file) => {
    const url = `https://raw.githubusercontent.com/bit-shift-io/the-great-cook-up/main/${file.path}`
    const data = await fetch(url).then(r => r.text())
    const tokens = marked.lexer(data)

    // @ts-ignore
    const tagsToken = tokens.find(t => t?.text?.toLowerCase().startsWith('tags:'))
    if (!tagsToken) {
      return {
        path: file.path
      }
    }

    // @ts-ignore
    let tags = tagsToken?.text?.replace('Tags:', '').replace('tags:', '').split(',')
    // @ts-ignore
    tags = tags.map(tag => tag.trim())
    return {
      path: file.path,
      tags
    }
  }))


  return (
    <HomeClient files={files}/>
  )
}
