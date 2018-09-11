var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    Load: './webpack/entry.js',
    Main: './webpack/components/Main.jsx',
    Site: './webpack/components/Site.js'
  },
  output: {
    path: path.resolve(__dirname, 'assets/js/'),
    publicPath: "/assets/",
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunckhash.js',
  },
  mode: 'production',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'assets/js/',
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
    }),
    new BundleAnalyzerPlugin({
        analyzerMode: 'static'
    })
  ],
  optimization: {
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: "vendors",
                chunks: "all"
            }
        }
    }
  },
  resolve: {
    alias: {
        'letter-avatar': 'util/letter.avatar.js'
    },
    modules: [
        path.resolve('assets/js/'),
        path.resolve('./node_modules'),
    ]
  },
  module: {
    rules: [
      {
        test: /.jsx|.js?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
        ]
      },
      {
        test: /\.js$/,
        use: [ 'script-loader' ]
      },
      {
        test: /jquery.+\.js$/,
        use: [{
            loader: 'expose-loader',
            options: 'jQuery'
        },{
            loader: 'expose-loader',
            options: '$'
        }]
        },
        {
            test: /\.js$/,
            use: ["source-map-loader"],
            enforce: "pre"
        }
    ]
  },
  externals: {
    jquery: 'jQuery'
  }
};
