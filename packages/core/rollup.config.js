import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import rollup from "../../config/rollup.config";

const packageJson = require("./package.json");

export default rollup(packageJson, resolve, commonjs, typescript, dts);
