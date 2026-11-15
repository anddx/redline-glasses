import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: 'oxc',
    cssMinify: true,
    sourcemap: false,
  },
})
