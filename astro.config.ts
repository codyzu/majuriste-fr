// @ts-check
import {defineConfig} from 'astro/config';
import react from '@astrojs/react';
import unoCSS from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    unoCSS({
      injectReset: true, // Or a path to the reset file
    }),
  ],
});
