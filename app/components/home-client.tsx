"use client"

import Link from 'next/link'
import startCase from 'lodash/startCase'
import { ChangeEvent, useState } from 'react'
import { Input } from '@/components/ui/input'
import { ITree } from '@/services/github'

interface IHomeClient {
    files: Array<ITree>;
}

export function HomeClient(props : IHomeClient) {
    const [filter, setFilter] = useState('')
  
    const files = props.files?.filter(file => {
      if (!filter) {
        return true
      }
      const path = file.path.replace('.md', '')
      const title = path.replaceAll('-', ' ')
      return title.includes(filter)
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

          <div className="pb-5 pt-5">
            <Input
              placeholder="Search"
              onChange={handleChange}
              value={filter}
            />
          </div>
  
          {files.map(file => {
            const path = file.path.replace('.md', '')
            const title = startCase(path.replaceAll('-', ' '))
            return (
              <div key={path}>
                <Link href={`/${path}`}>{title}</Link>
              </div>
            )
          })}
        </div>
      </main>
    )
  }
  