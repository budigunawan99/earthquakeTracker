const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
      entry: "./src/index.js",
      output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.js"
      },
      module: {
            rules: [
                  {
                        test: /\.css$/,
                        use: [
                              {
                                    loader: "style-loader"
                              },
                              {
                                    loader: "css-loader"
                              }
                        ]
                  },
                  {
                        test: /\.ttf$/,
                        use: [
                              {
                                    loader: 'file-loader',
                                    options: {
                                          name: './font/[hash].[ext]',
                                    },
                              }
                        ]
                  },
                  {
                        test: /\.(svg|png|jpg|jpeg|gif)$/,                      
                        use: [
                              {
                                    loader: 'file-loader',
                                    options: {
                                          name: './assets/[name].[ext]'                                         
                                    }
                              },
                        ],
                  },
            ]
      },
      plugins: [
            new HtmlWebpackPlugin({
                  template: "./src/index.html",
                  filename: "index.html"
            })
      ]
}