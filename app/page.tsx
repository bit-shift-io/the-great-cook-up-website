import { getFileList } from '../services/github'
import { HomeClient } from './components/home-client'

export default async function Home() {
  const files = await getFileList()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeClient files={files}/>
    </main>
  )
}
