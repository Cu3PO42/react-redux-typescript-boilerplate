const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

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
  devtool: process.env.NODE_ENV === 'PRODUCTION' ? 'source-map' : 'inline-source-map',

  entry: [
    './src/index.tsx'
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
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
    }]
  },
  plugins: [
    // Actually output extracted CSS
    new ExtractTextPlugin({
      filename: 'dist/main.css'
    }),
    // Generate an HTML-file to include all bundle outputs
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      inject: 'body'
    })
  ]
};
