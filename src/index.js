import './style.scss'
import { App } from './App'
import { createRoot } from 'react-dom/client'
import React from 'react'

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);