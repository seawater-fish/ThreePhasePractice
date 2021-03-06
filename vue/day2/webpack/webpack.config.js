const path = require('path');
// 导出模块，必须这样写，webpack定制的写法，webpack的命令使用
module.exports = {
    mode: 'development', // 可以设置为开发模式或者生产模式 development和production
    entry: './src/index.js', // 配置我需要处理的入口模块
    output: {
        filename: 'bundle.js', // 把入口模块所有的模块，通通打包进bundle.js文件里面
        path: path.resolve(__dirname, 'dist') // 配置打包输出的地方
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            }, {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ],
    }
};