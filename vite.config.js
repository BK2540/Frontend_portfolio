import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // ... other build options
    rollupOptions: {
      output: {
        assetFileNames: "[name][extname]", // Keep original file extension for assets
      },
    },
  },
  assetsInclude: ["**/*.glb"], // Include .glb files as assets
})
