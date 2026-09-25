import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allows specific Render subdomains or all hosts
    allowedHosts: ['.onrender.com', 'sdev-255-final-project-superman-ylkx.onrender.com'], 
  },
})
