const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ]
            }
        ]
            /*
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    // fallback: 'style-loader',
                    // use: 'css-loader!less-loader'
                    use: [
                        'style-loader',
                        'less-loader'
                    ]
                })
            }
            */
    },
    /*
    // 生成 index.html 文件
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Development'
        })
    ],
    */
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
