import webpack from 'webpack';
import 'webpack-dev-server'; // needed for typescript devServer config
// yarn add @types/webpack-dev-server @types/webpack --save-dev

import path from 'path';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';

import { argv } from 'yargs';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const contextPath = '';
const src = path.join(__dirname, '/src');
const index = path.join(src, '/index.tsx');

const dist = path.join(__dirname, './dist');
const indexHtml = path.join(src, '/index.html');
const publicPath = '/';
const config: webpack.Configuration = {
  entry: {
    app: index
  },
  mode: 'production',
  resolve: {
    modules: [src, 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
    alias: {
      src
    }
  },
  output: {
    path: dist,
    filename: '[name].[hash].js',
    sourceMapFilename: '[file].map',
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
  devtool: 'source-map',
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
      //       loader: MiniCssExtractPlugin.loader
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
        test: /\.(png|jpg|woff|woff2|ttf|svg|eot|gif)$/,
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
      'process.env.NODE_ENV': JSON.stringify((argv.env && argv.env.NODE_ENV) || 'production')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify((argv.env && argv.env.prodEnv) || 'dummyurl')
    }),
    new webpack.DefinePlugin({
      contextPath: JSON.stringify(contextPath)
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.[hash].css'
    }),
    new CopyWebpackPlugin([
      {
        context: 'src/assets',
        from: '**/*',
        to: '../dist/assets'
      }
    ])
  ]
};

export default config;
