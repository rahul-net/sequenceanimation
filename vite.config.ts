import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Base path is configurable so one codebase serves both free hosts:
// - GitHub Pages PROJECT site:  VITE_BASE_PATH=/<repo-name>/  (e.g. /sequenceanimation/)
// - Cloudflare Pages / root hosting: leave VITE_BASE_PATH unset (defaults to "/").
// The value is normalised to end with "/". Asset paths in src/ use
// import.meta.env.BASE_URL, so they follow this base automatically.
// HashRouter is used, so no server-side SPA fallback is assumed.
const rawBase = process.env.VITE_BASE_PATH ?? '/'
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
