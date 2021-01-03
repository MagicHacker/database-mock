module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:node/recommended', 'prettier'],
	plugins: ['node', 'prettier'],
	env: {
		node: true,
		commonjs: true,
		es6: true
	},
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	rules: {
		'prettier/prettier': 'error'
	}
}
