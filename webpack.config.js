const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const isDev = env.development || false;

  return ({
    mode: isDev ? "development" : "production",
    entry: path.resolve(__dirname, "./examples/index.js"),
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "./build"),
    },
    devServer: {
      port: 8000,
      hot: true,
      open: true,
      historyApiFallback: true
    },
    devtool: isDev ? "eval-cheap-module-source-map" : false,
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"]
              }
            }
          ],
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            },
          ],
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Demo",
        template: path.resolve(__dirname, "./examples/index.html"),
      })
    ],
    resolve: {
      extensions: [".js", ".jsx"],
    },
    optimization: {
      splitChunks: {
        chunks: "all"
      }
    }
  });
}
