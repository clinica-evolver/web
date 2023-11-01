import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ babel: { plugins: ['babel-plugin-styled-components'] } })],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@atoms': path.resolve(__dirname, './src/components/atoms'),
      '@molecules': path.resolve(__dirname, './src/components/molecules'),
      '@templates': path.resolve(__dirname, './src/components/templates'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@enums': path.resolve(__dirname, './src/global/enums'),
      '@helpers': path.resolve(__dirname, './src/global/helpers'),
      '@services': path.resolve(__dirname, './src/global/services'),
      '@routes': path.resolve(__dirname, './src/global/routes'),
      '@styles': path.resolve(__dirname, './src/global/styles'),
      '@theme': path.resolve(__dirname, './src/global/theme'),
    },
  },
})
