const path = require('path');

// HtmlWebpackPlugin 还是会默认生成 index.html 文件。
// 这就是说，它会用新生成的 index.html 文件，把我们的原来的替换。
const HtmlWebpackPlugin = require('html-webpack-plugin');
//通常，在每次构建前清理 /dist 文件夹，是比较推荐的做法，因此只会生成用到的文件。让我们完成这个需求。
// clean-webpack-plugin 是一个比较普及的管理插件，让我们安装和配置下
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpack = require('webpack');// 热加载需要的 webpack

module.exports = {
    entry: {
        // app: './src/index.js',
        // print: './src/print.js'
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    // 修改配置文件，告诉开发服务器（dev server）在哪里查找文件
    devServer: {
        contentBase: './dist',
        hot: true // 服务器热加载

    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
        }),
        new webpack.HotModuleReplacementPlugin() // 热加载的插件
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
