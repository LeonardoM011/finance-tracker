// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';

const config = {
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

const configIndexSrc = Object.assign({}, config, {
    name: "configIndexSrc",
    entry: './src/main/js/Index.jsx',
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/index.js'
    },
});

const configIndexTarget = Object.assign({}, config, {
    name: "configIndexTarget",
    entry: './src/main/js/Index.jsx',
    output: {
        path: __dirname,
        filename: './target/classes/static/built/index.js'
    },
});

const configLoginSrc = Object.assign({}, config, {
    name: "configLoginSrc",
    entry: './src/main/js/Login.jsx',
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/login.js'
    },
});

const configLoginTarget = Object.assign({}, config, {
    name: "configLoginTarget",
    entry: './src/main/js/Login.jsx',
    output: {
        path: __dirname,
        filename: './target/classes/static/built/login.js'
    },
});

const configRegisterSrc = Object.assign({}, config, {
    name: "configRegisterSrc",
    entry: './src/main/js/Register.jsx',
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/register.js'
    },
});

const configRegisterTarget = Object.assign({}, config, {
    name: "configRegisterTarget",
    entry: './src/main/js/Register.jsx',
    output: {
        path: __dirname,
        filename: './target/classes/static/built/register.js'
    },
});

module.exports = [configIndexSrc, configIndexTarget, configLoginSrc, configLoginTarget, configRegisterSrc, configRegisterTarget];