export type ExtractValues<T> = T extends readonly any[] ? T[number] : T
export type BuildRange<N extends number, Current extends number[] = [0]> = Current['length'] extends N ? Current[number] : BuildRange<N, [...Current, Current['length']]>
