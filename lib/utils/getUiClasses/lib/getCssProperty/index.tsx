import type { BaseUiClassesType } from '../../const'

const getCssProperty = (key: keyof BaseUiClassesType) => {
    const propertyMap: Partial<Record<keyof BaseUiClassesType, string>> = {
        flexDirection: 'flex-direction',
        align: 'align-items',
        justify: 'justify-content',
        grow: 'flex-grow',
        maxWidth: 'max-width',
        maxHeight: 'max-height',
        radius: 'border-radius',
        cols: 'grid-template-columns',
        backgroundColor: 'background-color',
        p: 'padding',
        px: 'padding',
        py: 'padding',
        pt: 'padding-top',
        pr: 'padding-right',
        pb: 'padding-bottom',
        pl: 'padding-left'
    }

    return propertyMap[key] || key
}

export default getCssProperty
