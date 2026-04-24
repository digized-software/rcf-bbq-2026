import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const repoName = 'rcf-bbq-2026'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? `/${repoName}/` : '/',
  plugins: [tailwindcss(), react()],
})
