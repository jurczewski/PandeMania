module.exports = {
	extends: ['airbnb', 'prettier', 'prettier/react'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': ['error'],
		'linebreak-style': 0,
		'no-use-before-define': 0,
	},
	env: {
		browser: true,
		node: true,
		jest: true,
	},
};
