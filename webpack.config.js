const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = (env) => {
    return {
        mode: env.mode ?? "development", // production & development
        entry: path.resolve(__dirname, "src", "index.js"),
        output: {
            path: path.resolve(__dirname, "doc"),
            filename: "[name].[contenthash].js",
            clean: true, // при каждой сборке браузер будет очищать файлыи снова создавать
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public", "index.html"),
            }),
            new webpack.ProgressPlugin()
        ],
    };
};
