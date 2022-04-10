import {defineConfig} from 'vite'
import {resolve} from 'path'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import preprocess from 'svelte-preprocess'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: '0.0.0.0',
    },
    root: resolve('src/'),
    base: './',
    plugins: [
        svelte({
            preprocess: preprocess(),
        }),
    ],
    build: {
        outDir: resolve('./dist/'),
        emptyOutDir: true,
    },
    optimizeDeps: {
        exclude: ['svelte-navigator'],
    },
})
