module.exports = {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
      diagnostics: false,
    },
  },
  testEnvironment: "jsdom",
  preset: "ts-jest",
  snapshotSerializers: ["@emotion/jest/serializer"],
};
