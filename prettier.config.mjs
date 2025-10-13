import myCustomConfig from "@evgeniyworkbel/prettier-config";

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  ...myCustomConfig,
  plugins: ["prettier-plugin-tailwindcss"],

  // Settings provided for prettier-plugin-tailwindcss
  tailwindStylesheet: "./src/app/globals.css",
};
