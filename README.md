# run-ts-on-node
试试在node环境使用typescript开发

### 思路

node每次require一个后缀为.ts的文件时调用./libs/bootstrap-typescript文件里的`require.extensions['.ts']`定义的回调函数, 回调函数里直接转义ts文件到js. 最后用`module._compile`去处理

### 试一试吧!

npm install

node index.js

然后会看到 hello typescript黄色字样, 成功了!

### 编译成什么样子了?

我在遇见ts文件的时候编译后的文件写到dist文件夹下了...可以去看一看