// const webpackConfig = require('../webpack.config.dev');

// module.exports = webpackConfig;

// copied from root.
import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server'; // needed for typescript devServer config

const src = path.join(__dirname, '/src');

type tfnConfig = (props: {config: webpack.Configuration}) => webpack.Configuration;
const fnConfig: tfnConfig = ({config}) => {
  console.log('config.resolve = ', config.resolve);
  if (config.resolve) {
    config.resolve.modules = [src, 'node_modules'];
    config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx'];
    config.resolve.alias = { src };
  }
  return config;
};

export default fnConfig;

