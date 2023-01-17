import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";

const outDir = resolve(__dirname, "..", "dist");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [],
      }),
    },
    react(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
    outDir,
    emptyOutDir: true,
  },
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
});
