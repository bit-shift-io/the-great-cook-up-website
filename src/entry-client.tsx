import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './globals.css'

ReactDOM.hydrateRoot(
    document.getElementById('root')!,
    <React.StrictMode>
        <BrowserRouter /*basename="/the-great-cook-up-website"*/>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
