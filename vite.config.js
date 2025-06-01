import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/D4D/",
});

// import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite";
// export default defineConfig({
//   plugins: [tailwindcss()],
//   base: "/D4D/",
// });

// export default {
//   base: "/D4D/",
//   build: {
//     chunkSizeWarningLimit: 600,
//   },
// };
