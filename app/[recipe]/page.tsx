import Link from 'next/link'
import { getFileList } from '../../services/github'
import { marked } from 'marked'

export async function generateStaticParams() {
  const files = await getFileList()
  const paths = files.map((file) => ({
    recipe: file.path.replace('.md', '')
  }))
  return paths
}

export default async function Recipe(props : any) {
  const url = `https://raw.githubusercontent.com/bit-shift-io/the-great-cook-up/main/${props.params.recipe}.md`
  const data = await fetch(url).then(r => r.text())
  const tokens = marked.lexer(data)
  const html = marked.parser(tokens)

  return (
    <main className="flex-grow justify-center items-center">
      <Link href="/">
        &#8592; Back
      </Link>

      <div dangerouslySetInnerHTML={{__html: html}}/>
    </main>
  )
}
