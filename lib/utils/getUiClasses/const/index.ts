import type { BreakpointType } from '@lib/const/breikpoints'
import type { ColorsType } from '@lib/const/colors'
import { COLORS_VALUES } from '@lib/const/colors'
import type { BuildRange, ExtractValues } from '@lib/types'

export const POINT = 4
export const MAX_UI_SIZE = 201
export const SIZES = Array.from({ length: MAX_UI_SIZE }, (_, i) => i)
export type SizeType = BuildRange<typeof MAX_UI_SIZE>
export type PercentType = `${BuildRange<101>}%`
export type SizeValueType = SizeType | PercentType | 'auto' | 'fit-content' | 'min-content' | 'max-content' | 'inherit' | 'initial' | 'unset'

export const SIZE_VALUES = [...SIZES, ...Array.from({ length: 101 }, (_, i) => `${i}%`), 'auto', 'fit-content', 'min-content', 'max-content', 'inherit', 'initial', 'unset'] as unknown as SizeValueType

export const BASE_UI_CLASSES = {
    display: ['block', 'inline', 'inline-block', 'flex', 'grid', 'inline-flex', 'inline-grid', 'none'] as const,
    align: ['start', 'center', 'end'] as const,
    justify: ['start', 'center', 'end'] as const,
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'] as const,
    grow: [true, false] as const,
    gap: SIZES as unknown as SizeType[],
    cols: SIZES as unknown as SizeType[],
    color: COLORS_VALUES as unknown as ColorsType,
    backgroundColor: COLORS_VALUES as unknown as ColorsType,
    radius: [...SIZES, '50%', 1000] as unknown as [SizeType, '50%', 1000],
    width: SIZE_VALUES,
    maxWidth: SIZE_VALUES,
    height: SIZE_VALUES,
    maxHeight: SIZE_VALUES,
    p: SIZES as unknown as SizeType,
    px: SIZES as unknown as SizeType,
    py: SIZES as unknown as SizeType,
    pt: SIZES as unknown as SizeType,
    pr: SIZES as unknown as SizeType,
    pb: SIZES as unknown as SizeType,
    pl: SIZES as unknown as SizeType
}

export type BaseUiClassesType = Partial<{
    [K in keyof typeof BASE_UI_CLASSES]: ExtractValues<(typeof BASE_UI_CLASSES)[K]>
}>

export type UiClassesType = BaseUiClassesType & Partial<Record<BreakpointType, BaseUiClassesType>>
