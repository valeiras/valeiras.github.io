import { resolve } from "path";
import Inspect from "vite-plugin-inspect";

export default {
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        portfolio: resolve(__dirname, "portfolio/index.html"),
        curriculum: resolve(__dirname, "curriculum/index.html"),
      },
    },
  },
};
