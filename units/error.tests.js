test({
	name: 'error',
	_should: {
		error: {
			'test that error throws an error?': true
		}
	},
	'that error throws an error?': function () {
		o.error('nubs');
	}
});
