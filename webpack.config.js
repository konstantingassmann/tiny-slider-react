const path = require('path');

module.exports = {
  entry: './build/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'module.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'css-loader' ]
      }
    ]
  },
};
