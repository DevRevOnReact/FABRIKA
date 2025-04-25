import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true
    },
    proxy: {
      '/tasks': {
        target: 'http://backend:3001',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/tasks/, '/tasks'),
      }
    }
  }
});