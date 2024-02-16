import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  output: "server",
  adapter: vercel({
    imageService: true
  }),
  integrations: []
});