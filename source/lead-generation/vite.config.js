import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        smallBusinessAi: resolve(__dirname, 'small-business-ai.html'),
        automationForLocalBusiness: resolve(__dirname, 'automation-for-local-business.html'),
        aiSacramento: resolve(__dirname, 'ai-sacramento.html'),
        leadGeneration: resolve(__dirname, 'lead-generation.html'),
      },
    },
  },
})
