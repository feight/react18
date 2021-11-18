const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    target: "web",
    entry: [path.resolve(__dirname, './src/index.tsx')],
    output: {
      path: path.resolve(__dirname, './build/client'),
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