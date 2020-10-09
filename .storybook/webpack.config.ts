// const webpackConfig = require('../webpack.config.dev');

// module.exports = webpackConfig;

// copied from root.
const path = require('path');
const src = path.join(__dirname, '/src');

module.exports = ({ config }) => {
  config.resolve.modules = [src, 'node_modules'];
  config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx'];
  config.resolve.alias = { src };

    // config.resolve = {
  //   modules: [src, 'node_modules'],
  //   extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],

  //   // fix module resolver for typescript !!!
  //   alias: {
  //     src
  //   }
  // };


  return config;
};
