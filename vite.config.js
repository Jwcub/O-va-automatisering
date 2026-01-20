import { defineConfig } from "vite";
import {resolve } from "path";

export default defineConfig({
    build: {rollupOptions: {
        input: {
            main: resolve(__dirname, "index.html"),
            bilder: resolve(dirname, "bilder.html"),
            arbetsprocess: resolve(dirname, "arbetsprocess.html")
        }
    }}
})