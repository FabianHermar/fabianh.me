import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [ tailwind( {
    applyBaseStyles: false,
  } ), react() ],
  i18n: {
    defaultLocale: 'es',
    locales: [ 'es', 'en', 'de' ],
    routing: {
      prefixDefaultLocale: false
    }
  }
});