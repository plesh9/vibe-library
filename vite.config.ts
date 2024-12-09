import { defineConfig } from 'vite'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

export default defineConfig({
    plugins: [react(), libInjectCss(), dts({ include: ['lib'] })],
    resolve: {
        alias: {
            '@lib': resolve(__dirname, 'lib'),
            '@shared': resolve(__dirname, 'src/shared'),
            '@entities': resolve(__dirname, 'src/entities'),
            '@features': resolve(__dirname, 'src/features'),
            '@widgets': resolve(__dirname, 'src/widgets'),
            '@pages': resolve(__dirname, 'src/pages'),
            '@app': resolve(__dirname, 'src/app')
        }
    },
    build: {
        assetsInlineLimit: 0,
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            formats: ['es']
        },
        rollupOptions: {
            external: ['react', 'react/jsx-runtime'],
            input: Object.fromEntries(
                glob
                    .sync('lib/**/*.{ts,tsx}', {
                        ignore: ['lib/**/*.d.ts']
                    })
                    .map((file) => [relative('lib', file.slice(0, file.length - extname(file).length)), fileURLToPath(new URL(file, import.meta.url))])
            ),
            output: {
                assetFileNames: 'assets/[name][extname]',
                entryFileNames: '[name].js'
            }
        }
    }
})
