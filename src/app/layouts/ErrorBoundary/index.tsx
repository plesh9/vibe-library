/* eslint-disable no-console */
import type { ErrorInfo, ReactNode } from 'react'
import React, { Suspense } from 'react'
import ErrorHandler from '@widgets/ErrorHandler'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(_error: Error) {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error(error, errorInfo)
    }

    render() {
        const { hasError } = this.state
        const { children } = this.props

        if (hasError) {
            return (
                <Suspense fallback='Loading...'>
                    <ErrorHandler />
                </Suspense>
            )
        }

        return children
    }
}

export default ErrorBoundary
