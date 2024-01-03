import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  build: { outDir: 'dist', assetsDir: 'public' },
  plugins: [react(), VitePWA({ registerType: 'autoUpdate', devOptions: { enabled: true },
    manifest: {
      name: 'React Tasks',
      short_name: 'React Tasks',
      description: 'Uma simples lista de tarefas com React',
      theme_color: '#ffffff',
      icons: [{ src: './icones/tasks-192.png', sizes: '192x192', type: 'image/png' }]
    }
  }
  )],
})
