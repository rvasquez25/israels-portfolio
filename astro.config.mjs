// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static output is intentional: the whole site is pre-rendered and served from
// Netlify's CDN. The only dynamic piece (the contact form) is handled by
// Netlify Forms, which detects the static <form> in the built HTML — no adapter
// or server runtime required.
export default defineConfig({
  site: 'https://israelvasquezmusic.netlify.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
