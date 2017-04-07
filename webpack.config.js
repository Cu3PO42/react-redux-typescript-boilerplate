const ExtractTextPlugin = require('extract-text-webpack-plugin');

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

module.exports = {
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
    }]
  },
  plugins: [
    // Actually output extracted CSS
    new ExtractTextPlugin({
      filename: 'build/main.css'
    })
  ]
};
