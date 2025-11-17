import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({mode}) =>{
  const env = loadEnv(mode, '.')
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    server: {
      port: Number(env.VITE_PORT) || 3001,
      hmr: {
        overlay: true,
      },
      watch: {
        usePolling: true,
      },
      open: true,
    },
  };
});
