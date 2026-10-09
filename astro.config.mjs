import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://trilha-de-novos-v2.pages.dev', // placeholder
  integrations: [tailwind(), sitemap()],
  vite: {
    // optional: if needed
  },
});
