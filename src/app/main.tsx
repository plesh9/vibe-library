import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from '@app/config/router'
import ErrorBoundary from '@app/layouts/ErrorBoundary'
import '/lib/styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ErrorBoundary>
            <RouterProvider router={router} />
        </ErrorBoundary>
    </React.StrictMode>
)
