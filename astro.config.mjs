import { defineConfig } from 'astro/config';
import lit from "@astrojs/lit";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/': '/dashboard'
  },
  integrations: [lit(), svelte()]
});