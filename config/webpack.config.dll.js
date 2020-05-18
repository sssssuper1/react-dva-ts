const webpack = require('webpack')
const paths = require('./paths')
const path = require('path')

module.exports = {
  entry: {
    vender: ['react', 'react-dom']
  },
  mode: 'production',
  output: {
    filename: 'static/js/[name].dll.[hash:6].js',
    path: paths.appPublic,
    library: '[name]_dll'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_dll',
      path: path.resolve(paths.vender, 'manifest.json')
    })
  ]
}