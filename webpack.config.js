const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装

module.exports = {
    entry: {
        'sdk': ['./src/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }, 
    // 压缩混淆 js
    plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html',
			inject: true
		})
	],
	module: {
		rules: [
		  // 对js文件进行babel-loader处理（将ES6语法转换成ES5）
			{
			  test: /\.js$/,
			  exclude: /node_modules/,
			  loader: "babel-loader",
			  options: {
				presets: [
				  [
					"@babel/preset-env",// 将ES6语法转成ES5
					{
					  // 低版本浏览器中只补充项目中使用到的ES6语法
					  useBuiltIns: "usage" 
					}
				  ]
				]
			  }
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			}
		]
	  }
}
