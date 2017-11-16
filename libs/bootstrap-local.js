'use strict';

const fs = require('fs');
const path = require('path');
const ts = require('typescript');
Error.stackTraceLimit = Infinity;

const compilerOptions = JSON.parse(fs.readFileSync(path.join(__dirname, './tsconfig.json')))['compilerOptions'];

require.extensions['.ts'] = function (module, filename) {
	const source = fs.readFileSync(filename).toString();
	const result = ts.transpile(source, compilerOptions);
	return module._compile(result, filename);
}



