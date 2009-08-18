test({
	name: 'error',
	_should: {
		error: {
			'that error throws an error?': true,
			'documentation': true
		}
	},
	'that error throws an error?': function () {
		o.error('nubs');
	},
	'documentation': function () {
	
		var takes_a_number = function (n) {
			if (typeof n !== 'number') {
				o.error('FFFFFFFFFFFFUUUUUU');
			}
			return n + 1;
		};
		takes_a_number('hi'); // error

	}
});
