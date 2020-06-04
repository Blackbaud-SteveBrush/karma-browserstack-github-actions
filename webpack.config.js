const path = require('path');
const DefinePlugin = require('webpack/lib/DefinePlugin');

const srcPath = path.resolve(process.cwd(), 'src');

module.exports = {
  entry: './src/sample.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new DefinePlugin({
      'ROOT_DIR': JSON.stringify(srcPath)
    })
  ]
};
