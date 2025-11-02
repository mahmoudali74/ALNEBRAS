import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // تأكد إن Vercel يعرف مجلد الـ build
  },
  server: {
    port: 5173, // مش ضروري على Vercel، بس مهم لو تجرب محلي
  },
})
