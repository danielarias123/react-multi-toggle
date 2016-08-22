module.exports = {
     entry: './index.es6.js',
     output: {
         filename: 'index.js'
     },
     // Compile all es6 .js files except node_modules
     module: {
         loaders: [{
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
         }]
     }
 }
