import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/gooseberry/',
  build: {
    target: 'ESNext'
  },
  plugins: [react()],
  resolve: {
    alias: {
      api: '/src/api',
      assets: '/src/assets',
      components: '/src/components',
      routes: '/src/routes',
      store: '/src/store',
      types: '/src/types',
      utils: '/src/utils'
    }
  }
});
