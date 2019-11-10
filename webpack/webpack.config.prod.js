const TerserPlugin = require("terser-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "production",
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
                    compress: {
                        pure_funcs: ["console.debug", "console.log", "console.info", "console.warn"],
                    },
                    safari10: true,
                    sourceMap: false,
                    warnings: true,
                },
            }),
        ],
    },
});
