import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcss from "postcss";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), postcss(), reactRefresh()],
});
