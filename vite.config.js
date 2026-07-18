import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',

      workbox: {
  navigateFallbackDenylist: [
    /^\/Systeme-Solaire(?:\/|$)/i,
    /^\/SimGame(?:\/|$)/i,
    /^\/was-it-there(?:\/|$)/i,
  ],
},

      manifest: {
        name: 'Portfolio de Kalim',
        short_name: 'Kalim',
        description: 'Developer cockpit personnel de Kalim',
        theme_color: '#09090b',
        background_color: '#09090b',
        display: 'standalone',
        start_url: '/',
      },
    }),
  ],
});
