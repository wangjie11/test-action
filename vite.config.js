import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: "/testing",
    publicDir: "public",
    plugins: [react()],
  };
});
