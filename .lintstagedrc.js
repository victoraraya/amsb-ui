const path = require('path');

const buildEslintCommand = (filenames) =>
    `npx eslint ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

module.exports = {
    '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};
