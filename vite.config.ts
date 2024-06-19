import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://github.com/unplugin/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite'
// https://github.com/unplugin/unplugin-vue-components
import Components from 'unplugin-vue-components/vite'
// https://github.com/MMF-FE/vite-plugin-cdn-import/blob/master/README.zh-CN.md
import { Plugin as importToCDN, autoComplete } from 'vite-plugin-cdn-import'
// https://github.com/hannoeru/vite-plugin-pages
import Pages from 'vite-plugin-pages'
// https://github.com/vbenjs/vite-plugin-compression
import viteCompression from 'vite-plugin-compression';

import { nodePolyfills } from 'vite-plugin-node-polyfills';
import wasm from "vite-plugin-wasm";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src"),
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (path: string) => {
          if (path.includes("node_modules")) {
            return "node"
          }
        }
      }
    }
  },

  plugins: [
    vue(),
    Pages(
      {
        dirs: 'src/views',
      }),
    AutoImport({
      imports: ["vue", "vue-router",
        {
          'localforage':
            [
              ['default', 'db'],
            ]
        }]
    }),
    Components(),
    importToCDN(
      {
        prodUrl: "https://unpkg.com/{name}@{version}/{path}",
        modules: [
          autoComplete('vue')
        ],
      }),
    viteCompression(),
    nodePolyfills(),
    wasm()
  ],
  server: {
    host: "0.0.0.0"
  }
})
