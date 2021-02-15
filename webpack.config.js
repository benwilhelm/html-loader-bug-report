const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.jpg$/i,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "src/index.html" })
  ]
}
