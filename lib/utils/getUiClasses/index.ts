import BREAKPOINTS from '../../const/breikpoints'
import type { UiClassesType } from './const'
import { BASE_UI_CLASSES, type BaseUiClassesType } from './const'
import { POINT } from './const/index'
import sanitizeClassName from './lib/sanitalizeClassName'

const INITIAL_UI_CLASSES: Partial<UiClassesType> = {
    display: 'flex',
    flexDirection: 'column'
}

const getUiClasses = (initialProps: Record<string, any> = {}): string => {
    const props: Record<string, any> = { ...INITIAL_UI_CLASSES, ...initialProps }
    const baseKeys = Object.keys(BASE_UI_CLASSES) as (keyof BaseUiClassesType)[]
    const classes: string[] = []

    baseKeys.forEach((key) => {
        if (key in props && props[key] !== undefined) {
            const className = sanitizeClassName(key, props[key])

            classes.push(className)
        }
    })

    Object.keys(BREAKPOINTS).forEach((bp) => {
        if (bp in props && typeof props[bp] === 'object') {
            Object.entries(props[bp] as BaseUiClassesType).forEach(([key, value]) => {
                if (baseKeys.includes(key as keyof BaseUiClassesType)) {
                    const className = sanitizeClassName(key, value as string)

                    classes.push(`${bp}-${className}`)
                }
            })
        }
    })

    return classes.join(' ')
}

export type { UiClassesType }
export { getUiClasses as default, POINT }
