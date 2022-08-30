const path = require("path");
const { defineConfig, build } = require("vite");
const vue = require("@vitejs/plugin-vue");
const viteTs = require("@vitejs/plugin-vue-jsx");

const entryDir = path.resolve(__dirname, "../src");
const outDir = path.resolve(__dirname, "../lib");

const baseConfig = defineConfig({
  publicDir: false,
  plugins: [vue(), viteTs()],
});

const rollupOptions = {
  external: ["vue"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

const buildLib = async () => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, "export.ts"),
        name: "simple-confirm-vue3",
        fileName: "simple-confirm-vue3",
        formats: ["es", "umd"],
      },
      outDir,
    },
  });
};

buildLib();
