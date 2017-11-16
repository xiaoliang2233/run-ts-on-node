# run-ts-on-node
试试在node环境使用typescript开发

node每次require一个后缀为.ts的文件时调用bootstrap.local文件里的`require.extensions['.ts']`定义的回调函数, 回调函数里直接转义ts文件到js. 最后用`module._compile`去处理

###试一试
npm install

node index.js

然后会看到 hello typescript黄色字样, 成功了!
