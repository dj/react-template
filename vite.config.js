import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"

const env = loadEnv(
  "all",
  // eslint-disable-next-line no-undef
  process.cwd(),
)

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: env.VITE_PORT,
  },
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
  },
})
