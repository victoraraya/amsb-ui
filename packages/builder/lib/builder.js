#!/usr/bin/env node
const rollup = require('rollup');
const typescript = require('@rollup/plugin-typescript');
const resolve = require('@rollup/plugin-node-resolve').nodeResolve;
const commonjs = require('@rollup/plugin-commonjs');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const path = require('path');
const bundleSize = require('rollup-plugin-bundle-size');

const outputCommonJSOptions = {
    file: './dist/cjs/index.js',
    format: 'cjs',
    exports: 'auto',
    sourcemap: false,
};

const outputESMOptions = {
    file: './dist/esm/index.js',
    format: 'esm',
    exports: 'auto',
    sourcemap: false,
};

const inputOptions = {
    input: './lib/index.ts',
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({
            tsconfig: path.resolve('./tsconfig.json'),
        }),
        bundleSize(),
    ],
};

async function build() {
    const buidleWithExternal = await rollup.rollup(inputOptions);

    await buidleWithExternal.write(outputCommonJSOptions);
    await buidleWithExternal.write(outputESMOptions);
    await buidleWithExternal.close();
}

build();
