const HtmlWebpackPlugin = require('html-webpack-plugin')
const { join, resolve } = require('path')

module.exports = () => ({
    mode: 'development',
    entry: join(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                exclude: /(node_modules)/,
                use: ['babel-loader']
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader',
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'public', 'index.html')
        })
    ],
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        proxy: {
            '/assets': {
                target: 'http://localhost:3000',
                router: () => 'https://web.dev.cpwys.co',
                logLevel: 'debug' /*optional*/
            }
        }
    }
})