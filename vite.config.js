import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';

// https://vite.dev/config/
export default defineConfig((config) => ({
  build: {
    sourcemap: config.mode === 'development' ? 'inline' : false,
  },
  publicDir: '../../../public',
  resolve: {
    alias: {
      "@": fileURLToPath (new URL ('./src/js', import.meta.url)),
    },
  },
  root: 'src/js/browser',
  server: {
    host: true,
    port: 9100,
  }
}));
