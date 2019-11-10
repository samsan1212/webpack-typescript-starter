const merge = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.common.js");
const plugins = require("./utils/plugins");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        publicPath: "https://www.asiahospitalitycareers.com/assets/",
    },
    performance: {
        hints: "warning",
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                extractComments: true,
                parallel: true,
                terserOptions: {
                    ecma: 5,
                    ie8: false,
                    pure_funcs: ["console.debug", "console.log", "console.info", "console.warn"],
                    safari10: true,
                    sourceMap: false,
                    warnings: true,
                },
            }),
        ],
    },
    plugins: [
        plugins.createHtml("production"),
    ],
});
