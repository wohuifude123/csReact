const path = require('path');
// HtmlWebpackPlugin 还是会默认生成 index.html 文件。
// 这就是说，它会用新生成的 index.html 文件，把我们的原来的替换。
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 通常，在每次构建前清理 /dist 文件夹，是比较推荐的做法，因此只会生成用到的文件。让我们完成这个需求。
// clean-webpack-plugin 是一个比较普及的管理插件，让我们安装和配置下
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpack = require('webpack');// 热加载需要的 webpack

module.exports = {
    /*
    entry: {
        // app: './src/index.js',
        // print: './src/print.js'
        // app: './src/index.js'
        index: './src/index.js',
        another: './src/another-module.js'
    },
    */
    /*
        将第三方库(library)（例如 lodash 或 react）提取到单独的 vendor chunk 文件中，是比较推荐的做法，
        这是因为，它们很少像本地的源代码那样频繁修改。

        因此通过实现以上步骤，利用客户端的长效缓存机制，可以通过命中缓存来消除请求，并减少向服务器获取资源，
        同时还能保证客户端代码和服务器端代码版本一致。这可以通过使用新的 entry(入口) 起点，
        以及再额外配置一个 CommonsChunkPlugin 实例的组合方式来实现
     */

    entry: {
        index: './src/index.js',
        another: './src/another-module.js',
        vendor: [
            'lodash'
        ]
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
        // 每次都会清理 dist 文件夹的内容
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            // title: 'Production'
            title: 'Caching'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // 指定公共 bundle 的名称。
        }),
        new webpack.HotModuleReplacementPlugin(), // 热加载的插件
        /*
        以下是由社区提供的，一些对于代码分离很有帮助的插件和 loaders：

            ExtractTextPlugin: 用于将 CSS 从主应用程序中分离。
            bundle-loader: 用于分离代码和延迟加载生成的 bundle。
            promise-loader: 类似于 bundle-loader ，但是使用的是 promises。

        CommonsChunkPlugin 插件还可以通过使用显式的 vendor chunks 功能，从应用程序代码中分离 vendor 模块
        */
        /*
            幸运的是，可以使用两个插件来解决这个问题。
            第一个插件是 NamedModulesPlugin，将使用模块的路径，而不是数字标识符。
            虽然此插件有助于在开发过程中输出结果的可读性，然而执行时间会长一些。

            第二个选择是使用 HashedModuleIdsPlugin，推荐用于生产环境构建
         */
        new webpack.HashedModuleIdsPlugin(),
        /*
            然而 CommonsChunkPlugin 有一个较少有人知道的功能是，能够在每次修改后的构建结果中，
            将 webpack 的样板(boilerplate)和 manifest 提取出来。通过指定 entry 配置中未用到的名称，
            此插件会自动将我们需要的内容提取到单独的包中
         */
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),
        /*
            将第三方库（library）（例如 lodash 或 react）提取到单独的 vendor chunk 文件中，
            是比较推荐的做法，这是因为，它们很少像本地的源代码那样频繁修改。
            因此通过实现以上步骤，利用客户端的长效缓存机制，可以通过命中缓存来消除请求，
            并减少向服务器获取资源，同时还能保证客户端代码和服务器端代码版本一致。
            这可以通过使用新的 entry（入口）起点，以及再额外配置一个 CommonsChunkPlugin 实例的组合方式来实现
         */
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
    ],
    // 修改配置文件，告诉开发服务器（dev server）在哪里查找文件
    output: {
        //filename: '[name].bundle.js',
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    }
};
