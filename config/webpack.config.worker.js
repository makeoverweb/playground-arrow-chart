const paths = require('./paths')
const dotenvWebpack = require('dotenv-webpack');

module.exports = (env) => {
  return {
    entry: './src/worker.ts',
    output: {
      filename: 'worker.js',
      path: paths.appSrc
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [ new dotenvWebpack() ]
  }
}
