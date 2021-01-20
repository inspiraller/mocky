# React-mocky
- Taken from react-boilerplate-2020-10

# Prerequisites 
- node, npm or yarn

# How to run in dev mode
- Using command line
```bash
git clone https://github.com/inspiraller/react-mocky.git
cd react-mocky
yarn install
yarn start
```

# Visit browser
localhost:3000

# Steps of building this repo
**Day 1**
- Removing redundant plugins, and disallowed - material ui
- Fix typescript errors with declaration file
- Build Form layout
- Add Validation
- Add Styling


# How to run webpack as typescript file 
// https://webpack.js.org/configuration/configuration-languages/
**prerequisites**
```
yarn add @types/webpack-dev-server tsconfig-paths typescript ts-node @types/node @types/webpack --save-dev
```

**package.json**
```javascript
{
   "dev": "cross-env TS_NODE_PROJECT=\"webpack-tsconfig.json\" webpack-dev-server --config ./webpack.config.dev.ts --target web",
    "build": "cross-env TS_NODE_PROJECT=\"webpack-tsconfig.json\" webpack --config ./webpack.config.prod.ts"
}
```
**webpack.config.ts**
```typescript
import webpack from 'webpack';
import 'webpack-dev-server'; // needed for typescript devServer config
const config: webpack.Configuration = {}
```