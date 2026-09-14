import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    port: 1574,
    strictPort: true,
    proxy: {
      '/auth': {
        target: 'https://dt-backend-1.onrender.com',
        changeOrigin: true,
        secure: true,
      },
      '/health': {
        target: 'https://dt-backend-1.onrender.com',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
