import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';

// process.env [NODE_ENV] = 'development';

function checkForLessCssChanges () {
  return {
    name: 'Check for LessCSS Changes',
    handleHotUpdate({ file, server }) {
      if (file.endsWith ('.less')) {
        console.log ('Locale file updated')
        server.ws.send ({
          type: 'custom',
          event: 'less-file-change',
        });
      }
      return false;
    },
  }
}

// https://vite.dev/config/
export default defineConfig((config) => ({
  build: {
    // sourcemap: config.mode === 'development' ? 'inline' : false,
    // sourcemap: false,
  },
  publicDir: '../../../public',
  plugins: [
    checkForLessCssChanges (),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath (new URL ('./src/js', import.meta.url)),
    },
  },
  root: 'src/js/browser',
  server: {
    // hmr: false,
    host: true,
    port: 9100,
  }
}));
