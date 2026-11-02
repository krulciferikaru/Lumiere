import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Archived versions are static sites in public/archived/<version>/. Vercel serves their index.html
// for /archived/<version>/, but Vite's single-page fallback would send that URL to this app instead,
// so dev and preview get the same folder-index behavior here.
function archivedVersions() {
  function serveIndex(req, _res, next) {
    const path = req.url.split('?')[0]
    // Folders only (no dot), so shared files like /archived/time-machine.js are served as-is
    if (/^\/archived\/[^/.]+\/?$/.test(path)) req.url = path.replace(/\/?$/, '/index.html')
    next()
  }
  return {
    name: 'archived-versions',
    configureServer(server) {
      server.middlewares.use(serveIndex)
    },
    configurePreviewServer(server) {
      server.middlewares.use(serveIndex)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), archivedVersions()],
})
