import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
// import viteImagemin from "vite-plugin-imagemin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    // viteImagemin({
    //   mozjpeg: {
    //     quality: 70,
    //   },
    //   optipng: {
    //     optimizationLevel: 5,
    //   },
    //   webp: {
    //     quality: 75,
    //   },
    // }),
  ],
  base: "/global-travel-update/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
