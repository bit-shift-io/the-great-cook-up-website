import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'
import './globals.css'

export function render(url: string, data: any) {
    return renderToString(
        <React.StrictMode>
            <StaticRouter location={`${url}`} /*basename="/the-great-cook-up-website"*/>
                <App initialData={data} />
            </StaticRouter>
        </React.StrictMode>
    )
}
