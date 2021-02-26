const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = (env = {}/*, argv*/) => ({
    context: __dirname,
    mode: 'development',
    devtool: false,                        
    entry: {
        'index': './index.js'    
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',       
        filename: `[name].js`
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                    onlyCompileBundledFiles: true
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    stats: 'minimal'
});