# AirMiles ReactJS Components Library

This is a ReactJS Components Library owned by AirMiles

## Libraries

Required libraries for this template

-   ReactJS [Docs](https://reactjs.org/)
-   Material UI [Docs](https://mui.com/)
-   StoryBook [Docs](https://storybook.js.org/)

#### Dev Dependencies

-   Lerna [Docs](https://lerna.js.org/)
-   Typescript [Docs](https://www.typescriptlang.org/)
-   Jest [Docs](https://jestjs.io/)
-   Testing Library [Docs](https://testing-library.com/)
-   ESLint [Docs](https://eslint.org/)
-   Prettier [Docs](https://prettier.io/)
-   Lint Staged [Docs](https://github.com/okonet/lint-staged)
-   Husky [Docs](https://github.com/typicode/husky)
-   Airbnb Code Standard [Docs](https://github.com/airbnb/javascript)

## Installation

Please, make sure you are currently using node 16.0.0

### Node Version Setup (NVM)

##### MAC OSX

Users need to run this command to make sure they are in the correct version

```sh
nvm use
```

> Note: if you don't have v16 of node you will need to install first

```sh
nvm install 16
nvm use
```

##### Windows

Users need to install NVM for Windows and run this command to make sure they are in the correct version

> Note: NVM for Windows: [Link](https://github.com/coreybutler/nvm-windows/releases)

```sh
nvm install 16.0.0
nvm use 16.0.0
```

### Install dependencies

```sh
npm run setup
npm run build
npm run husky
```

### Run StoryBooks

```sh
npm run storybook
```

#### Make builder executable

Sometimes you will get an error if the rollup builder script is not executable, if so please run the following command

```sh
chmod +x packages/builder/lib/builder.js
```
