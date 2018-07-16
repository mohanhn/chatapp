const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, './node_modules'),
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            },
            {
                test: /\.styl$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'stylus-loader' }],
            },
        ],
    },
};
