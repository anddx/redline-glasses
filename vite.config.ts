import { defineConfig } from 'vite'
import { minify } from 'html-minifier-terser'
export default defineConfig({
  build: {
    minify: 'oxc',
    cssMinify: true,
    sourcemap: false,
  },
  plugins: [
    {
      name: 'minify-html',
      apply: 'build',
      enforce: 'post',

      async generateBundle(_, bundle) {
        for (const file of Object.values(bundle)) {
          if (file.type === 'asset' && file.fileName.endsWith('.html')) {
            file.source = await minify(String(file.source), {
              collapseWhitespace: true,
              removeComments: true,
              minifyCSS: true,
              minifyJS: true,
            })
          }
        }
      },
    },
  ],
})
