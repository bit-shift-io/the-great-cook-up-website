"use client"

import Link from 'next/link'
import Markdown, { ReactRenderer } from 'marked-react'
import { ReactNode } from 'react';

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


export function RecipeClient(props : any) {
  return (
    <main className="flex-grow justify-center items-center">
      <Link href="/">
        &#8592; Back
      </Link>

      <Markdown value={props.markdown} renderer={renderer} />
    </main>
  )
}
