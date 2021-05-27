import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv';
import { injectHtml } from 'vite-plugin-html';
export default ({ command, mode }) => {
  let parsed = {}
  let base = '/'
  let outDir = 'dist'
  if (command === 'serve') {
    // 开发模式，默认使用.env配置
    parsed = dotenv.config().parsed;
  } else {
    // build模式，根据mode使用env文件
    parsed = dotenv.config({ path: `.env.${mode}` }).parsed;
    base = '/vite-vue3-template/'
    // outDir = 'dist/vite'
  }
  return defineConfig({
    base,
    plugins: [vue(), injectHtml({ injectData: parsed })],
    build: {
      outDir
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://www.toutiao.com/',
          changeOrigin: true
        }
      }
    }
  })
}
