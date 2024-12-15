import type { ComponentPropsWithoutRef, ComponentType, ElementType } from 'react'
import React, { forwardRef } from 'react'
import classnames from '../../utils/classnames'
import type { UiClassesType } from '../../utils/getUiClasses'
import getUiClasses from '../../utils/getUiClasses'

type BoxElementType = keyof JSX.IntrinsicElements
type AdditionalPropsType<T extends BoxElementType | ComponentType<any>> = T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : ComponentPropsWithoutRef<T>
type PolymorphicRef<T extends ElementType> = React.ComponentPropsWithRef<T>['ref']
type Props<T extends ElementType> = {
    as?: T
    ui?: UiClassesType
    ref?: PolymorphicRef<T>
} & AdditionalPropsType<T>

const Box = forwardRef(<T extends ElementType = 'div'>({ as, ui, className, ...rest }: Props<T>, ref: PolymorphicRef<T>) => {
    const Component = as || 'div'
    const uiClasses = getUiClasses(ui)

    return <Component className={classnames(uiClasses, className)} ref={ref} {...rest} />
}) as <T extends ElementType = 'div'>(props: Props<T>) => React.ReactElement | null

export type BoxPropsType = Parameters<typeof Box>[0]
export default Box
