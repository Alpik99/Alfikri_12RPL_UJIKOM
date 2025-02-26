const webpack = require("webpack");

module.exports = {
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "fs": false, // fs tidak bisa digunakan di browser
      "stream": require.resolve("stream-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "assert": require.resolve("assert/"),
      "zlib": require.resolve("browserify-zlib"),
      "util": require.resolve("util/"),
      "buffer": require.resolve("buffer/")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"]
    })
  ]
};
