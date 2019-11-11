const path = require("path");

// plugins
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

function createHtml() {
    return new HtmlWebpackPlugin({
        chunksSortMode: "none", // ref: https://github.com/marcelklehr/toposort/issues/20
        filename: path.resolve(__dirname, "../../bin/index.html"),
        hash: true,
        inject: true,
        template: path.resolve(__dirname, "./html-template.html"),
    });
}

/**
 * Clean the files before build
 */
function cleanFiles() {
    return new CleanWebpackPlugin({
        verbose: true,
    });
}

function getPlugins() {
    const plugins = [
        cleanFiles(),
    ];
    if (process.env.npm_package_config_noHTML !== "yes") {
        plugins.push(createHtml());
    }
    return plugins;
}

module.exports = {
    getPlugins,
};
