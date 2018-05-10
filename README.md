# webpack多页面构建脚手架

### config.js
----------
- routes 路由文件配置

### Core
----------
- routes.js 生成页面文件
- webpack.config.entry 配置多入口
- html-webpack-plugin chunk引入与本页面相关的代码块

### babel-loader
----------
babel执行分为三个阶段：解析-编译-写入，babel不借助插件时只解析代码，原样输出。babel只转换语法，不转换新引入的API。
babel-preset-env：
	将ES6+语法编译为ES5语法
babel-preset-react:
	处理React语法
babel-preset-stage$:
	处理提案中的新语法
babel-polyfill
	对不存在的API进行修补

- plugin先与preset执行
- plugins 先后顺序执行
- preset 后先顺序执行

### postcss-loader
---------
使用下一代CSS语法书写
CSS模块：
	配合css-loader使用：`css-loader?modules&importLoaders=1&localIdentName=[local]__[hash:base64:5]`

autoprefixer:
	为CSS添加前缀
