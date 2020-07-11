
const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader', 'eslint-loader']
            }
        ]
    },
    plugins: [],
    devServer: {}
};
