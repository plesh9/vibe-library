import type { ComponentType, ReactNode, FC } from 'react'
import { lazy, Suspense } from 'react'

interface Options {
    loading?: ReactNode
}

export const lazyLoad = <T extends ComponentType<any>>(loader: () => Promise<{ default: T }>, options?: Options): FC<React.ComponentProps<T>> => {
    const LazyComponent = lazy(loader)
    const { loading = null } = options || {}

    const WrappedComponent = (props: React.ComponentProps<T>) => (
        <Suspense fallback={loading}>
            <LazyComponent {...props} />
        </Suspense>
    )

    WrappedComponent.displayName = `LazyLoad(${LazyComponent.name || 'Component'})`

    return WrappedComponent
}
