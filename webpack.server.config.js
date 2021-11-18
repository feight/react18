const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    target: "node",
    entry: [path.resolve(__dirname, './src/server/index.js')],
    output: {
      path: path.resolve(__dirname, './build/server'),
      filename: 'index.js',
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
              test: /\.(ts|js)x?$/,
              exclude: /(node_modules)/,
              use: [
                {
                  loader: 'babel-loader',
                  options: {
                    presets: [ "@babel/preset-env",
                    "@babel/preset-react",
                    "@babel/preset-typescript"],
                  },
                },
                {
                  loader: 'ts-loader',
                  options: {
                    compilerOptions: {
                      noEmit: false,
                    },
                  },
                },
              ],
            },
          ]
    }
}