const merge = require('webpack-merge');
const common = require('./webpack.common.js');
/*
    开发环境（development）和生产环境（production）的构建目标差异很大。
    在开发环境中，我们需要具有强大的、具有实时重新加载（live reloading）
    或热模块替换（hot module replacement）能力的 source map 和 localhost server。

    而在生产环境中，我们的目标则转向于关注更小的 bundle，更轻量的 source map，
    以及更优化的资源，以改善加载时间。

    由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的 webpack 配置。

    虽然，以上我们将生产环境和开发环境做了略微区分，
    但是，请注意，我们还是会遵循不重复原则（Don't repeat yourself - DRY），
    保留一个“通用”配置。

    为了将这些配置合并在一起，我们将使用一个名为 webpack-merge 的工具。
    通过"通用"配置，我们不必在环境特定(environment-specific)的配置中重复代码。

    我们先从安装 webpack-merge 开始，并将之前指南中已经成型的那些代码再次进行分离

    npm install --save-dev webpack-merge
 */

module.exports = merge(common, {
    devtool: 'inline-source-map',
    // 修改配置文件，告诉开发服务器（dev server）在哪里查找文件
    devServer: {
        contentBase: './dist',
        hot: true // 服务器热加载
    }
});
