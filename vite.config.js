import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Nursery-react/', // ✅ MATCHES YOUR REPO NAME
  plugins: [react()],
});
