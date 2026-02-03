import { defineConfig } from "vite";
import { resolve } from "path";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  build: {
    rollupOptions: {
        input: {
            main: resolve(__dirname, "index.html"),
            bilder: resolve(__dirname, "bilder.html"),
            arbetsprocess: resolve(__dirname, "arbetsprocessen.html"),
            kurser: resolve(__dirname, "kurser.html")
        }
    }
  },
    plugins: [
        ViteImageOptimizer({
            png: {
                quality: 75
            },
            jpg: {
                quality: 75
            },
            jpeg: {
                quality: 75
            },
            webp: {
                quality: 65
            },
            avif: {
                quality: 60
            }
        })
    ]
});

