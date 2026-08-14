// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { fontProviders } from "astro/config";


// https://astro.build/config
export default defineConfig({
  site: "https://hopeofnewdawn.com",
  
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Gabarito",
      cssVariable: "--font-gabarito",
      fallbacks: ["ui-serif", "serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Be Vietnam Pro",
      cssVariable: "--font-be-vietnam-pro",
      fallbacks: ["system-ui", "sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Waiting for the Sunrise",
      cssVariable: "--font-sunrise",
      fallbacks: ["cursive"],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

});