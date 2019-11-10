const path = require("path");
const plugins = require("./plugins");

module.exports = {
    entry: path.resolve(__dirname, "../src/index.ts"), // remember to change the extension if you are writing tsx
    output: {
        path: path.resolve(__dirname, "../bin"),
        chunkFilename: "[name].js",
        filename: "index.js",
    },
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                default: {
                    reuseExistingChunk: true,
                },
            },
            chunks: "all",
        },
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".css", "json"],
        alias: {
            "lib": path.resolve(__dirname, "../src/lib"),
        },
    },
    module: {
        rules: [{
            test: /\.ts(x)$/,
            enforce: "pre",
            loader: "tslint-loader",
            options: {
                configFile: path.resolve(__dirname, "../tslint.json"),
            },
        }, {
            test: /\.ts(x)?$/,
            use: "ts-loader",
            exclude: /node_modules/,
        }, {
            test: /\.(css)$/,
            use: [{
                loader: "thread-loader",
                options: {
                    workerParallelJobs: 2,
                },
            }, "style-loader",
            {
                loader: "css-loader",
                options: {
                    importLoaders: 1,
                },
            },
            {
                loader: "postcss-loader",
            }],
        }, {
            test: /\.(svg|jpg|jpeg|png|eot|ttf|woff|gif)$/,
            use: "file-loader",
        }],
    },
    plugins: plugins.getPlugins(),
};
