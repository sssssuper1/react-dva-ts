const webpack = require('webpack')
const paths = require('./paths')
const path = require('path')

module.exports = {
  entry: {
    react: ['react', 'react-dom']
  },
  mode: 'production',
  output: {
    filename: '[name].dll.[hash:6].js',
    path: paths.dllPath,
    library: '[name]_dll'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_dll',
      path: path.resolve(paths.dllPath, 'manifest.json')
    })
  ]
}