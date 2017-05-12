const path = require('path');
const webpack = require('webpack');
var autoprefixer = require('autoprefixer');




module.exports = {
    context:__dirname + '/src/js',
    entry:{
        // home:"./index.js",
        // about:"./about.js"
        index:"./index.js"
    },
    output:{
        path:__dirname+'/public',
        filename:'/js/[name].js'
    },
    module: {
        rules: [
            {
                /*
                 使用babel编译ES6/ES7/ES8为ES5代码
                 使用正则表达式匹配后缀名为.js的文件
                 */
                test: /\.js$/,

                // 排除node_modules目录下的文件, npm安装的包不需要编译
                exclude: /node_modules/,

                /*
                 use指定该文件的loader, 值可以是字符串或者数组.
                 这里先使用eslint-loader处理, 返回的结果交给babel-loader处理. loader的处理顺序是从最后一个到第一个.
                 eslint-loader用来检查代码, 如果有错误, 编译的时候会报错.
                 babel-loader用来编译js文件.
                 */
                use: ['babel-loader']
            },

            {
                test: /\.(sass|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },

            {
                // 匹配.css文件
                test: /\.css$/,

                /*
                 先使用css-loader处理, 返回的结果交给style-loader处理.
                 css-loader将css内容存为js字符串, 并且会把background, @font-face等引用的图片,
                 字体文件交给指定的loader打包, 类似上面的html-loader, 用什么loader同样在loaders对象中定义, 等会下面就会看到.
                 */
                // use: ['style-loader', { loader: 'css-loader', options: { modules: true } } ]
                use: ['style-loader',   'css-loader', 'postcss-loader' ]
            },
            {
                /*
                 匹配各种格式的图片和字体文件
                 上面html-loader会把html中<img>标签的图片解析出来, 文件名匹配到这里的test的正则表达式,
                 css-loader引用的图片和字体同样会匹配到这里的test条件
                 */
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,

                /*
                 使用url-loader, 它接受一个limit参数, 单位为字节(byte)

                 当文件体积小于limit时, url-loader把文件转为Data URI的格式内联到引用的地方
                 当文件大于limit时, url-loader会调用file-loader, 把文件储存到输出目录, 并把引用的文件路径改写成输出后的路径

                 比如 views/foo/index.html中
                 <img src="smallpic.png">
                 会被编译成
                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA...">

                 而
                 <img src="largepic.png">
                 会被编译成
                 <img src="/f78661bef717cf2cc2c2e5158f196384.png">
                 */
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
            }

        ]},
}