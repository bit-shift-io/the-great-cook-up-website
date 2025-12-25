// import fs from 'fs' 
// import { useFileSystemCache } from '../utils/filesystem-cache'

export interface ITree {
    path: string;
}

export interface IGithubGitTreesMain {
    sha: string;
    url: string;
    tree: Array<ITree>;
}

export const getFileList = async () => {
    let data: IGithubGitTreesMain

    if (typeof window === 'undefined') {
        const { useFileSystemCache } = await import('../utils/filesystem-cache')
        data = await useFileSystemCache(async () => {
            const r = await fetch('https://api.github.com/repos/bit-shift-io/the-great-cook-up/git/trees/main').then(r => r.json())
            return r
        }, {
            cacheBaseKey: 'main-file-list',
            ttl: 600000
        })()
    } else {
        data = await fetch('https://api.github.com/repos/bit-shift-io/the-great-cook-up/git/trees/main').then(r => r.json())
    }

    const ignoreFiles = ['.gitignore', 'README.md', 'img', '.github']
    const files = data.tree.filter(file => {
        if (ignoreFiles.includes(file.path)) {
            return false
        }
        return true
    })
    return files
}