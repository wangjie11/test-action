import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: "/test-action",
    publicDir: "public",
    plugins: [react()],
  };
});
