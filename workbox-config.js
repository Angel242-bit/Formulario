module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,html,js,png,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};