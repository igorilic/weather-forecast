import  webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    'webpack-hot-middleware/client?reload=true',
    // './src/index.js'
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.scss$/, loaders: ['style', 'css', 'sass']}
    ]
  }
  // module: {
  //   loaders: [{
  //     exclude: /node_modules/,
  //     loader: 'babel',
  //     query: {
  //       presets: ['react', 'es2015', 'stage-1']
  //     }
  //   }]
  // },
  // resolve: {
  //   extensions: ['', '.js', '.jsx']
  // },
  // devServer: {
  //   historyApiFallback: true,
  //   contentBase: './'
  // }
};
