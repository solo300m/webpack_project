const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode:'development',
    entry: path.resolve(__dirname,'src','index.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: path.resolve(__dirname,'dist'),
        port:8080,//настраивается дополнительно вручную
        open: true,//доп вручную
      },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.html'),
    })],
    module: {
        rules: [
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            options: {
                presets: [
                ['@babel/preset-env', { targets: "defaults" }]
                ]
            }
            }
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        ],
    }

};