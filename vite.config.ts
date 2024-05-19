import terser from "@rollup/plugin-terser";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      name: "chistock-ui",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      input: "./index.ts",
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
      plugins: [terser()],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
