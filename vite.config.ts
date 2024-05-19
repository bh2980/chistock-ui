import react from "@vitejs/plugin-react";
import path from "path";
import postcss from "rollup-plugin-postcss";
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
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
      plugins: [
        postcss({
          inject: true, // CSS를 'style' 태그로 주입하거나 true를 설정하면 JS 번들에 직접 포함
          minimize: true, // CSS 압축
          extensions: [".css"], // 처리할 파일 확장자
        }),
      ],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
