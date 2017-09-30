const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    // 修改配置文件，告诉开发服务器（dev server）在哪里查找文件
    devServer: {
        contentBase: './dist',
        hot: true // 服务器热加载
    }
});
