import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'Founder_circle',
  plugins: [react()],
  build: {
    outDir: '../dist'
  }
})
