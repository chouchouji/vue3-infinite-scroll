import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue3-infinite-scroll/',
  plugins: [
    vue(),
    components({
      resolvers: [VarletUIResolver()]
    }),
    autoImport({
      resolvers: [VarletUIResolver({ autoImport: true })]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      name: 'vue3-infinite-scroll',
      entry: path.resolve(__dirname, '/src/index.ts')
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
