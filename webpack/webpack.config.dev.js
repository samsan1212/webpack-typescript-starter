const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const plugins = require("./utils/plugins");

module.exports = merge(common, {
    devtool: "inline-source-map",
    mode: "development",
    output: {
        publicPath: "https://development.asiahospitalitycareers.com/assets/",
    },
    plugins: [
        plugins.createHtml(),
    ],
});
