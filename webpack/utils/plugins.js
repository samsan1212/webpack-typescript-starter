const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { InjectManifest } = require("workbox-webpack-plugin");
const Visualizer = require("webpack-visualizer-plugin");

function createHtml(mode = "development") {
    return new HtmlWebpackPlugin({
        chunksSortMode: "none", // ref: https://github.com/marcelklehr/toposort/issues/20
        filename: path.resolve(__dirname, "../../../web-dist/www/template/index.html"),
        inject: true,
        nodeENV: mode,
        template: path.resolve(__dirname, "../../template/template.html"),
    });
}

/**
 * Clean the files before build
 */
function cleanFiles() {
    return new CleanWebpackPlugin({
        // Write logs to console.
        verbose: true,
    });
}

function createBundleStatistics() {
    return new Visualizer({
        filename: "../www/template/bundleJs_statistics.html",
    });
}

function createSW() {
    return new InjectManifest({
        importWorkboxFrom: "local",
        importsDirectory: "wb",
        include: ["/", /\.html$/, /\.js$/, /\.json$/, /\.css$/],
        swDest: "service-worker.js",
        swSrc: path.join(process.cwd(), "webpack", "utils", "workbox-sw.js"),
        templatedURLs: {
            "/": new Date().toString(),
        },
    });
}

module.exports = {
    cleanFiles,
    createBundleStatistics,
    createHtml,
    createSW,
};
