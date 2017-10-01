const merge = require('webpack-merge');
/*
    我们已经通过 import and export 语法，标识出了那些未引用代码（dead code），但是我们仍然需要从 bundle 中删除它们。
    要做到这一点，我们将添加一个能够删除未引用代码（dead code）的压缩工具（minifier）- UglifyJSPlugin - 在配置对象中添加

    你发现 dist/bundle.js 中的差异了吗？
    显然，现在整个 bundle 都已经被精简过，
    但是如果仔细观察，则不会看到 square 函数被引入，
    但会看到 cube 函数的修改版本（function r(e){return e*e*e}n.a=r）。
    现在，随着 tree shaking 和代码压缩，我们的 bundle 减小几个字节
 */
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

/*
    我们鼓励你在生产环境中启用 source map，因为它们对调试源码（debug）和运行基准测试（benchmark tests）很有帮助。
    虽然有如此强大的功能，然而还是应该针对生成环境用途，选择一个构建快速的推荐配置。

    对于本指南，我们将在生产环境中使用 source-map 选项，而不是我们在开发环境中用到的 inline-source-map
 */
module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        //new UglifyJSPlugin()
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
});
