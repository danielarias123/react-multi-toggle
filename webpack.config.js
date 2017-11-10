// Webpack is used only to compile example

module.exports = {
     entry: './example/index',
     output: {
         filename: 'bundle.js',
         path: '/example/',
     },
     module: {
         rules: [
           // Compile all es6 .js files except node_modules passed through HMR first
           {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             use: ['react-hot-loader/webpack', 'babel-loader'],
           },
           {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          }
         ]
     },
     devServer: {
      contentBase: './example',
      host: 'localhost',
      hot: true,
      inline: true,
      noInfo: true,
    }
 }
