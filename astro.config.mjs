import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  output: "server",
  server: {
    headers: {
      'Cache-Control': 'public, max-age=3600',
    }
  },
  adapter: vercel({
    imageService: true
  }),
  integrations: [tailwind()]
});