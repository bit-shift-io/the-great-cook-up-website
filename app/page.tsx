import { getFileList } from '../services/github'
import { HomeClient } from './components/home-client'

export default async function Home() {
  const files = await getFileList()

  return (
    <HomeClient files={files}/>
  )
}
