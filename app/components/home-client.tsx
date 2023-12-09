"use client"

import Link from 'next/link'
import startCase from 'lodash/startCase'
import { ChangeEvent, useState } from 'react'
import { Input } from '@/components/ui/input'
import { XCircle } from 'lucide-react'

interface IFileInfo {
  path: string;
  tags?: Array<string>;
}

interface IHomeClient {
    files: Array<IFileInfo>;
}

export function HomeClient(props : IHomeClient) {
    const [filter, setFilter] = useState('')
  
    const files = props.files?.filter(file => {
      if (!filter) {
        return true
      }

      const filterLower = filter.toLowerCase()

      const path = file.path.replace('.md', '')
      const title = path.replaceAll('-', ' ').toLowerCase()

      if (title.includes(filterLower)) {
        return true
      }

      const tags = file.tags
      const found = tags?.find(t => t.toLowerCase().includes(filterLower)) ?? false
      return found
    }) || []
  
    const handleChange = (evt : ChangeEvent<HTMLInputElement>) => {
        setFilter(evt.target.value)
    }

    console.log('filter: ', filter)
    return (
      <main className="flex flex-grow justify-center items-center p-5">
        <div className="flex-grow max-w-5xl border rounded p-5">

          <h1 className="pb-2 text-xl font-bold">
            The Great Cook Up
          </h1>

          <div className="flex flex-row justify-between pt-5 pb-5 items-center space-x-2">
            <Input
              placeholder="Search"
              onChange={handleChange}
              value={filter}
            />

            <XCircle onClick={() => setFilter('')} className="cursor-pointer"/>
          </div>
  
          {files.map(file => {
            const tags = file.tags
            const path = file.path.replace('.md', '')
            const title = startCase(path.replaceAll('-', ' '))
            return (
              <div key={path} className="flex justify-between">
                <Link href={`/${path}`}>{title}</Link>
                <div>
                  {tags?.map((tag, index) => {
                    return (
                      <span 
                        key={index}
                        className="rounded border pl-2 pr-2 cursor-pointer"
                        onClick={() => setFilter(tag.toLowerCase())}
                      >
                        {tag}
                      </span>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </main>
    )
  }
  