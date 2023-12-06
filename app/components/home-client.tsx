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
      <>
          <div>
            The Great Cook Up
          </div>

          <Input
            placeholder="Search"
            onChange={handleChange}
            value={filter}
          />
  
          {files.map(file => {
            const path = file.path.replace('.md', '')
            const title = startCase(path.replaceAll('-', ' '))
            return (
              <Link key={path} href={`/${path}`}>{title}</Link>
            )
          })}
      </>
    )
  }
  