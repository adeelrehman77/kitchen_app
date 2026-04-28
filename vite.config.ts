import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import sourceIdentifierPlugin from 'vite-plugin-source-identifier'

const isProd = process.env.BUILD_MODE === 'prod'
export default defineConfig({
  plugins: [
    react(),
    sourceIdentifierPlugin({
      enabled: !isProd,
      attributePrefix: 'data-matrix',
      includeProps: true,
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("framer-motion") ||
              id.includes("lucide-react")
            ) {
              return "ui-motion-icons";
            }
            if (
              id.includes("@radix-ui/react-dialog") ||
              id.includes("react-hook-form") ||
              id.includes("@hookform/resolvers") ||
              id.includes("/zod/")
            ) {
              return "form-vendor";
            }
            if (
              id.includes("react-router-dom") ||
              id.includes("react-helmet")
            ) {
              return "routing-seo-vendor";
            }
            if (
              id.includes("/react/") ||
              id.includes("/react-dom/")
            ) {
              return "react-vendor";
            }
          }
        },
      },
    },
  },
})
