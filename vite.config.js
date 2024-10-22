import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    assetsDir: 'assets',  // Adjust if needed
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && (assetInfo.name.endsWith('.woff2') || assetInfo.name.endsWith('.woff'))) {
            return `fonts/[name].[hash][extname]`;  // Ensure fonts are placed in 'fonts' directory
          }
          return `assets/[name].[hash][extname]`;
        },
      },
    },
  },
});
