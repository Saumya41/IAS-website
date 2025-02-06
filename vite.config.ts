import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    host: true, // Allows external access
    strictPort: true, // Ensures the exact port is used
    allowedHosts: ['e491-2409-40d4-b-4117-144f-d30-fae7-310f.ngrok-free.app'],
    headers: {
      'ngrok-skip-browser-warning': 'true',
    },
    cors: true, // Ensure cross-origin requests work
  },
});
