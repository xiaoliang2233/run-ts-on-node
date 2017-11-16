'use strict';

const fs = require('fs');
const path = require('path');
const ts = require('typescript');
const mkdirp = require('mkdirp')
Error.stackTraceLimit = Infinity;

// 获取 typescript 的配置文件
const compilerOptions = JSON.parse(fs.readFileSync(path.join(__dirname, '../tsconfig.json')))['compilerOptions'];

require.extensions['.ts'] = function (module, filename) {

	// 读取这个ts的源文件
	const source = fs.readFileSync(filename).toString();

	try {
		// 编译源文件
		const result = ts.transpile(source, compilerOptions);

		// 存到dist文件夹供学习者观察
		const parseFilename = path.parse(filename);
		const distPath = path.join(__dirname, '../dist', path.relative(process.cwd(), parseFilename.dir), `${parseFilename.name}.js`);
		mkdirp.sync(path.parse(distPath).dir);
		fs.writeFileSync(distPath, result);
		// 转交给node module的_compile函数处理
		return module._compile(result, filename);
	}
	catch (err) {
		console.error('Error while running script "' + filename + '":');
		console.error(err.stack);
		throw err;
	}
}



