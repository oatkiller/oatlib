test({
	name: 'error',
	_should: {
		error: {
			'that error throws an error?': true
		}
	},
	'that error throws an error?': function () {
		o.error('nubs');
	}
});
