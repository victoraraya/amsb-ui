const configure = (
  packageJson,
  resolve,
  commonjs,
  typescript,
  dts,
  typesOutputFile = null
) => {
  return [
    {
      input: packageJson.src,
      external: ["react", "react-dom"],
      output: [
        {
          file: packageJson.main,
          format: "cjs",
          sourcemap: true,
          exports: "auto",
        },
        {
          file: packageJson.module,
          format: "esm",
          sourcemap: true,
          exports: "auto",
        },
      ],
      plugins: [
        resolve(),
        commonjs(),
        typescript({ tsconfig: "./tsconfig.json" }),
      ],
    },
    {
      input: packageJson.types,
      output: [
        {
          file: typesOutputFile ? typesOutputFile : "dist/index.d.ts",
          format: "esm",
        },
      ],
      plugins: [dts()],
    },
  ];
};
export default configure;
