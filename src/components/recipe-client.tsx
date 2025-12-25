import { Link } from 'react-router-dom'
import { Printer, ChevronLeftCircle } from 'lucide-react'
import { LabelCheckbox } from '@/components/ui/checkbox'
import { TokensList, Tokens, Token } from 'marked'


function CheckboxList({ items }: Tokens.List) {
  return (
    <div className="flex flex-col">
      {items.map((token, idx) => {
        const { text } = token
        return (
          <LabelCheckbox label={text} key={idx} />
        )
      })}
    </div>
  )
}

function List({ items, ordered }: Tokens.List) {
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

interface IRecipeClient {
  tokens: TokensList
}

export function RecipeClient(props: IRecipeClient) {
  const { tokens } = props

  let renderState = RENDER_STATE.HEAD

  return (
    <main className="flex flex-grow justify-center items-center p-5">
      <div className="flex-grow max-w-5xl border rounded p-5">
        <div className="flex flex-row justify-between pb-5 print:hidden">
          <Link to="/" className="flex flex-row items-center">
            <ChevronLeftCircle />
            <span className="pl-2">Back</span>
          </Link>

          <Printer onClick={() => window.print()} className="cursor-pointer" />
        </div>

        {tokens.map((token, idx) => {
          // @ts-ignore
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
                <h1 className="pb-1 text-xl font-bold" key={idx}>
                  {text}
                </h1>
              )
            }

            return (
              <h2 className="pb-1 pt-3 text-lg font-semibold" key={idx}>
                {text}
              </h2>
            )
          }

          if (type == 'paragraph') {
            return (
              <p key={idx}>
                {text}
              </p>
            )
          }

          if (type == 'list') {
            if (renderState == RENDER_STATE.INGREDIENTS) {
              return (
                // @ts-ignore
                <CheckboxList {...token} key={idx} />
              )
            }
            return (
              // @ts-ignore
              <List {...token} key={idx} />
            )
          }

          return (
            <div key={idx}>
              {text}
            </div>
          )
        })}
      </div>
    </main>
  )
}
