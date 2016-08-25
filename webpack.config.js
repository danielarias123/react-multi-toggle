// Webpack is used only to compile example

module.exports = {
     entry: './example/index',
     output: {
         filename: 'bundle.js',
         path: './example/',
     },
     module: {
         loaders: [
           // Compile all es6 .js files except node_modules passed through HMR first
           {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loaders: ['react-hot', 'babel-loader'],
           },
           {
            test: /\.css$/,
            loader: "style-loader!css-loader"
          }
         ]
     },
     devServer: {
      contentBase: './example',
      host: 'localhost',
      hot: true,
      inline: true,
      info: false
    }
 }
