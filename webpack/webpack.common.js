const path = require("path");
const plugins = require("./utils/plugins");

module.exports = {
    entry: path.resolve(__dirname, "../src/views/main.tsx"),
    output: {
        path: path.resolve(__dirname, "../../web-dist/assets"),
        publicPath: "/assets/",
        chunkFilename: "[name].[hash].js",
        filename: "[name].[hash].js",
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
    "resolve": {
        "extensions": [".ts", ".tsx", ".js", ".css", "json"],
        "alias": {
            "@analytics": path.resolve(__dirname, "../src/analytics/"),
            "@common": path.resolve(__dirname, "../../web-common/src/"),
            "@hooks": path.resolve(__dirname, "../src/lib/hooks/"),
            "@lib": path.resolve(__dirname, "../src/lib/"),
            "@media": path.resolve(__dirname, "../src/media/"),
            "@sdk": path.resolve(__dirname, "../src/sdk/"),
            "@ui": path.resolve(__dirname, "../src/ui/"),
            "@utils": path.resolve(__dirname, "../src/lib/utils/"),
            "@widgets": path.resolve(__dirname, "../src/lib/widgets/"),
            "app-alert": path.resolve(__dirname, "../src/lib/alert/app-alert.ts"),
            "app-notifications": path.resolve(__dirname, "../src/lib/notifications/app-notifications.ts"),
            "app-react-redux": path.resolve(__dirname, "../src/lib/app/state/app-react-redux.tsx"),
            "app-styled": path.resolve(__dirname, "../../web-common/src/style/app-styled.tsx"),
            "async-react": path.resolve(__dirname, "../src/ui/async/async-wrapper.tsx"),
        },
    },
    "module": {
        "rules": [{
            test: /\.ts(x)$/,
            enforce: "pre",
            loader: "tslint-loader",
            options: {
                configFile: path.resolve(__dirname, "../tslint.json"),
            },
        }, {
            "test": /\.ts(x)?$/,
            "use": ["ts-loader"],
        }, {
            "test": /\.(css)$/,
            "use": [{
                loader: "thread-loader",
                options: {
                    workerParallelJobs: 2,
                },
            },
                "style-loader",
            {
                loader: "css-loader",
                options: {
                    importLoaders: 1,
                },
            },
            {
                loader: "postcss-loader",
            },
            ],
        }, {
            test: /\.(svg|jpg|jpeg|png|eot|ttf|woff|gif)$/,
            use: [{
                loader: "file-loader",
            }],
        },
        ],
    },
    "plugins": [
        plugins.cleanFiles(),
        plugins.createSW(),
        plugins.createBundleStatistics(),
    ],
};
