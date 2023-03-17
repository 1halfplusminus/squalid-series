import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import path from 'path';

import mdx from "@astrojs/mdx";
const __dirname = path.dirname(new URL(import.meta.url).pathname);
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), mdx()],
  vite:{
    resolve:{
      alias:{
        "@astroboy": path.resolve(__dirname, 'src'),
      }
    }
  }
});