import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from the apex of https://connect4.adrianeyre.co.uk, so asset URLs are
// root-absolute. This was `/connect4/` while the site lived under the
// adrianeyre.github.io user site; keeping that prefix after the custom-domain
// cutover made every `/connect4/assets/...` request 404.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
