const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const IS_PROD = process.env.NODE_ENV === 'PRODUCTION';

const cssLoaders = (other) => ExtractTextPlugin.extract({
  use: [{
    loader: 'css-loader',
    options: {
      sourceMap: true,
      // Enable CSS Modules to scope class names
      modules: true,
      importLoaders: 1 + other.length
    }
  }, {
    // Adjust URLs in CSS files so that they are relative to the source file rather than the output file
    loader: 'resolve-url-loader'
  }, ...other],
  // Do not extract in development mode for hot reloading
  fallback: 'style-loader'
});

const jsLoaders = (other) => [{
  loader: 'babel-loader'
}, ...other];

module.exports = {
  // Allow TypeScript files to be treated as normal JS
  resolve: {
    extensions: [
    '.js', '.jsx', '.ts', '.tsx'
  ]},

  // Enable source maps
  devtool: IS_PROD ? 'source-map' : 'inline-source-map',

  entry: [
    // HMR for React
    'react-hot-loader/patch',

    // Main entrypoint
    './src/index.tsx'
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    rules: [{
      test: /\.css$/,
      use: cssLoaders([])
    }, {
      test: /\.scss$/,
      use: cssLoaders([{
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }])
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: jsLoaders([])
    }, {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: jsLoaders([{
        loader: 'ts-loader'
      }])
    }, {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: 'tslint-loader',
      // Force TSLint before other loaders
      enforce: 'pre'
    }, {
      test: /\.(woff2?|png|tiff?|jpe?g)$/,
      use: [{
        // Include files as data urls
        loader: 'url-loader',
        options: {
          // Only embed small files
          limit: 10000
        }
      }]
    }]
  },
  plugins: [...[
    // Actually output extracted CSS
    new ExtractTextPlugin({
      filename: 'dist/main.css',
      disable: !IS_PROD
    }),
    // Generate an HTML-file to include all bundle outputs
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      inject: 'body'
    })
  ], ...(IS_PROD ? [] : [
    // Enable HMR
    new webpack.HotModuleReplacementPlugin(),
    // More readable module names in HMR
    new webpack.NamedModulesPlugin()
  ])],

  devServer: {
    port: 5678,
    // Serve index.html instead of 404
    historyApiFallback: true,
    // Enable Hot Module Reloading
    hotOnly: true,
    publicPath: '/'
  }
};
