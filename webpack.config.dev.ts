import webpack from 'webpack';
import 'webpack-dev-server'; // needed for typescript devServer config
// https://webpack.js.org/configuration/configuration-languages/
// prerequisites
// yarn add @types/webpack-dev-server @types/webpack --save-dev
// yarn add tsconfig-paths --save-dev
// yarn add typescript ts-node @types/node @types/webpack --save-dev

import path from 'path';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';

const src = path.join(__dirname, '/src');
const index = path.join(src, '/index.tsx');
const assets = path.join(src, '/assets');

const dist = path.join(__dirname, './dist');
const indexHtml = path.join(src, '/index.html');

const publicPath = '/';

const config: webpack.Configuration = {
  entry: {
    app: index
  },
  mode: 'development',
  resolve: {
    modules: [src, 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],

    // fix module resolver for typescript !!!
    alias: {
      src
    }
  },
  output: {
    path: dist,
    filename: '[name].js',
    pathinfo: true,
    publicPath
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          }
        }
      }
    }
  },
  cache: true,
  devtool: 'cheap-module-source-map',
  // devtool: 'inline-eval-cheap-source-map' = optimize dev mode
  // devtool: 'cheap-module-source-map',
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: src,
        enforce: 'pre',
        use: 'eslint-loader'
      },
      {
        test: /\.(js|jsx)$/,
        include: src,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { modules: false }], '@babel/react'],
            plugins: [
              '@babel/proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-syntax-dynamic-import'
            ]
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json'
            }
          }
        ],
        exclude: /node_modules/
      },
      /* https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/330 */
      // {
      //   test: /(\.s?css)$/,
      //   exclude: '/node_modules/',
      //   use: [
      //     {
      //       loader: 'style-loader'
      //     },
      //     {
      //       loader: 'css-loader?sourceMap'
      //     },
      //     {
      //       loader: 'postcss-loader'
      //     },
      //     {
      //       loader: 'sass-loader?outputStyle=expanded',
      //       options: {
      //         prependData: `$staticServer: '';`
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.(css|png|jpg|woff|woff2|ttf|svg|eot|gif)$/,
        use: 'url-loader?limit=8192'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: indexHtml,
      filename: './index.html',
      inject: 'true'
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        postcss: [
          autoprefixer({
            browsers: ['>3%', 'last 2 versions', 'not ie < 11']
          })
        ]
        // ...other configs that used to directly on `modules.exports`
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   filename: 'vendor.bundle.js',
    // }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development') // NEW
    })
    // new StyleLintPlugin({
    //   context: 'src',
    //   syntax: 'scss'
    // })
    // new OpenPlugin()
    // new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: dist,
    hot: true,
    port: 3000,
    inline: true
    // progress: true
    // stats: 'errors-only',
    // host: process.env.HOST,
  }
};

type tfnConfig = (globalConfig: webpack.Configuration) => webpack.Configuration;
const fnConfig: tfnConfig = globalConfig => ({
  ...globalConfig,
  ...config
});
export default fnConfig;
