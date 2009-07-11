tests.error = [
	{
		name: 'error',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		_should: {
			error: {
				'test that error throws an error?': true
			}
		},
		'test that error throws an error?': function () {
			o.error('nubs');
		}
	}
];

