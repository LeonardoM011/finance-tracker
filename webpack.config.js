// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';

const config = {
    entry: './src/main/js/App.jsx',
    devtool: 'source-map',
    // TODO: Change this to take in env variable
    mode: 'development',
    cache: true,
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

const configSrc = Object.assign({}, config, {
    name: "configSrc",
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
});

const configTarget = Object.assign({}, config, {
    name: "configTarget",
    output: {
        path: __dirname,
        filename: './target/classes/static/built/bundle.js'
    },
});

module.exports = [configSrc, configTarget];