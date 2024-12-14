import type { Entries } from 'type-fest'

declare global {
    interface ObjectConstructor {
        keys<T extends object>(o: T): (keyof T)[]
        values<T extends object>(o: T): ObjectValues<T>
        entries<T extends object>(o: T): Entries<T>
    }
}
