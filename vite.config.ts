import { fileURLToPath } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      name: '@binbinji/vue3-infinite-scroll',
      entry: resolve(__dirname, '/src/index.ts'),
      fileName: (format) => `vue3-infinite-scroll.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        //In UMD build mode, a global variable is provided for these externalized dependencies
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
