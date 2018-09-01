const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.bundle.js',
    chunkFilename: 'server.bundle.js',
  },
  mode: 'production',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    port: 3000
  },
  node: {
    fs: "empty",
    tls: "empty",
    net: "empty"
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
        options: {
            worker: {
                output: {
                    filename: "./worker.js",
                    chunkFilename: "[id].hash.worker.js"
                }
            }
        }
    })
  ],
  optimization: {
    splitChunks: {
    chunks: 'all'
    }
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'}
    ]
  }
}
