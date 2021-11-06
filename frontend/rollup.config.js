import buble from "@rollup/plugin-buble";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import url from "@rollup/plugin-url";
import vue from "rollup-plugin-vue";
import coffeescript from "rollup-plugin-coffee-script";
import { terser } from "rollup-plugin-terser";
import autoprefixer from "autoprefixer";
import { name, version } from "./package.json";

const plugins = [
  resolve({ extensions: [".js", ".vue", ".coffee"] }),
  commonjs(),
  vue({
    needMap: false,
    style: { postcssPlugins: [autoprefixer()] },
    template: { isProduction: true },
  }),
  coffeescript(),
  buble(),
  url(),
];

export default [
  {
    input: "src/components/Flipbook.vue",
    external: "rematrix",
    output: [
      { format: "es", file: "dist/flipbook.es.js" },
      { format: "cjs", file: "dist/flipbook.cjs.js" },
    ],
    plugins,
  },
  {
    input: "src/wrapper.coffee",
    output: { format: "iife", file: "dist/flipbook.js" },
    plugins,
  },
  {
    input: "src/wrapper.coffee",
    output: { format: "iife", file: "dist/flipbook.min.js" },
    plugins: [
      ...plugins,
      terser({ output: { comments: /copyright|license/i } }),
    ],
  },
];
