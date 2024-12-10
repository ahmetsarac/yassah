import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: './',
    plugins: [
      react(),
   ],
    define: {
      BASE_URL: JSON.stringify(env.BASE_URL),
    },
  };
});
