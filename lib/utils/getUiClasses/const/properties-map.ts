import getCssProperty from '../lib/getCssProperty'
import type { BaseUiClassesType } from '.'
import { BASE_UI_CLASSES } from '.'

const CSS_PROPERTIES_MAP: Partial<Record<keyof BaseUiClassesType, string>> = Object.keys(BASE_UI_CLASSES).reduce(
    (map, key) => {
        map[key as keyof BaseUiClassesType] = getCssProperty(key as keyof BaseUiClassesType)

        return map
    },
    {} as Partial<Record<keyof BaseUiClassesType, string>>
)

export default CSS_PROPERTIES_MAP
