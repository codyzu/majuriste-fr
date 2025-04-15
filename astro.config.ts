// @ts-check
import {defineConfig} from 'astro/config';
import react from '@astrojs/react';
import unoCSS from 'unocss/astro';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    mdx(),
    unoCSS({
      injectReset: '@unocss/reset/tailwind.css',
    }),
  ],
});
