#!/usr/bin/env node
const rollup = require("rollup");
const typescript = require("@rollup/plugin-typescript");
const nodeResolve = require("@rollup/plugin-node-resolve").nodeResolve;
const commonjs = require("@rollup/plugin-commonjs");
const path = require("path");

const outputCommonJSOptions = {
  file: "./dist/cjs/index.js",
  format: "cjs",
  exports: "auto",
  sourcemap: true,
};

const outputESMOptions = {
  file: "./dist/esm/index.js",
  format: "esm",
  exports: "auto",
  sourcemap: true,
};

const external = ["react"];

const inputOptions = {
  input: "./lib/index.ts",
  plugins: [
    typescript({
      tsconfig: path.resolve("./tsconfig.json"),
    }),
    nodeResolve(),
    commonjs(),
  ],
};

async function build() {
  const buidleWithExternal = await rollup.rollup({
    ...inputOptions,
    external,
  });

  await buidleWithExternal.write(outputCommonJSOptions);

  await buidleWithExternal.write(outputESMOptions);

  await buidleWithExternal.close();
}

build();
