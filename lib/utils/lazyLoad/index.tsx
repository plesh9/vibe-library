/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComponentType, ReactNode, FC } from 'react'
import { lazy, Suspense } from 'react'

type Options = {
    loading?: ReactNode
}

export const lazyLoad = <T extends ComponentType<any>>(loader: () => Promise<{ default: T }>, { loading = null }: Options): FC<React.ComponentProps<T>> => {
    const LazyComponent = lazy(loader)

    const WrappedComponent = (props: React.ComponentProps<T>) => (
        <Suspense fallback={loading}>
            <LazyComponent {...props} />
        </Suspense>
    )

    WrappedComponent.displayName = `LazyLoad(${LazyComponent.name || 'Component'})`

    return WrappedComponent
}

