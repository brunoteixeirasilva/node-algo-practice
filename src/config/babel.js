const index = require('./index');

require('@babel/core').transform(index, {
	root: 'src',
	plugins: ['@babel/preset-env'],
});
