"use client"

import Link from 'next/link'
//import Markdown, { ReactRenderer } from 'marked-react'
import { ReactNode } from 'react';
import { Printer, ChevronLeftCircle } from 'lucide-react'
import { LabelCheckbox } from '@/components/ui/checkbox'

/*
// https://marked.js.org/using_pro#renderer
const renderer : Partial<ReactRenderer> = {
    heading(children: ReactNode, level) {
        return (
            <h1 className="text-red-300">
              {children}
            </h1>
        )
    },

    list(children: ReactNode, ordered: boolean) {
        return (
            <li className="text-blue-300">
              {children}
            </li>
        )
    },

    paragraph(children: ReactNode) {
        return (
            <p className="text-green-300">
              {children}
            </p>
        )
    },

    link(href: string, text: ReactNode) {
        return (
            <a className="text-yellow-300" href={href}>
              {text}
            </a>
        )
    }
};
*/


function CheckboxList({ items }) {
  return (
    <div className="flex flex-col">
      {items.map((token, idx) => {
        const { text } = token
        return (
          <LabelCheckbox label={text} />
        )
      })}
    </div>
  )
}

function List({ items, ordered }) {
  if (ordered) {
    return (
      <ol className="list-decimal pl-5">
        {items.map((token, idx) => {
          const { text } = token
          return (
            <li key={idx}>
              {text}
            </li>
          )
        })}
      </ol>
    )
  }

  return (
    <ul className="list-disc pl-5">
      {items.map((token, idx) => {
        const { text } = token
        return (
          <li key={idx}>
            {text}
          </li>
        )
      })}
    </ul>
  )
}

const RENDER_STATE = {
  HEAD: 'head',
  INGREDIENTS: 'ingredients',
  METHOD: 'method',
  NOTES: 'notes'
}

export function RecipeClient(props : any) {
  const { tokens } = props

  let renderState = RENDER_STATE.HEAD

  return (
    <main className="flex flex-grow justify-center items-center p-5">
      <div className="flex-grow max-w-5xl border rounded p-5">
        <div className="flex flex-row justify-between pb-5">
          <Link href="/" className="flex flex-row items-center">
            <ChevronLeftCircle/>
            <span className="pl-2">Back</span>
          </Link>

          <Printer />
        </div>

        {tokens.map((token, idx) => {
          const { type, text } = token

          if (type == 'heading') {
            const { depth } = token

            if (text.toLowerCase().includes('ingredients')) {
              renderState = RENDER_STATE.INGREDIENTS
            }
            if (text.toLowerCase().includes('method')) {
              renderState = RENDER_STATE.METHOD
            }
            if (text.toLowerCase().includes('Notes')) {
              renderState = RENDER_STATE.NOTES
            }

            if (depth == 1) {
              return (
                <h1 className="pb-2 text-xl font-bold">
                  {text}
                </h1>
              )
            }

            return (
              <h2 className="pb-2 pt-5 text-lg font-semibold">
                {text}
              </h2>
            )
          }

          if (type == 'paragraph') {
            return (
              <p>
                {text}
              </p>
            )
          }

          if (type == 'list') {
            if (renderState == RENDER_STATE.INGREDIENTS) {
              return (
                <CheckboxList {...token} />
              )
            }
            return (
              <List {...token} />
            )
          }

          return (
            <div>
              {text}
            </div>
          )
        })}
      </div>
    </main>
  )
}
