const path = require('path');
// HtmlWebpackPlugin 还是会默认生成 index.html 文件。
// 这就是说，它会用新生成的 index.html 文件，把我们的原来的替换。
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        // 文件夹的名称
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    // presets:['es2015','react']
                    presets:['env', 'react', 'stage-0']
                }
            }
        ]
    }
};
