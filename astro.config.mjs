// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import gallery from 'astro-gallery';

import cloudflare from '@astrojs/cloudflare';

// Replace with your production URL after deploying to Vercel / Netlify.
// It powers the sitemap and the canonical / Open Graph URLs in BaseLayout.
const SITE_URL = 'https://djmau.org';

export default defineConfig({
  site: SITE_URL,
  session: false,
  integrations: [sitemap()],

  // Prefetches internal links on hover/viewport entry for near-instant navigation.
  prefetch: true,

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['blake3-wasm'],
    },
  },

  // Astro's built-in Fonts API: self-hosts and optimizes these at build time
  // (no Google-hosted requests, no extra npm packages, automatic preloading).
  // Each cssVariable below is consumed in src/styles/global.css inside the
  // Tailwind @theme block (--font-display, --font-body, --font-mono).
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Fraunces',
      cssVariable: '--ff-display',
      weights: ['400', '500', '600'],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--ff-body',
      weights: ['400', '500', '600'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'Space Mono',
      cssVariable: '--ff-mono',
      weights: ['400', '700'],
      subsets: ['latin'],
    },
  ],

  adapter: cloudflare(),
});
