(function () {

	var takes_numbers = function (n) {
		if (typeof n !== 'number') {
			throw new TypeError('needs number');
		}
	},
	fancy_takes_numbers = takes_numbers[o.before](parseFloat),
	takes_3_numbers = function (a,b,c) {
		takes_numbers(a);
		takes_numbers(b);
		takes_numbers(c);
	},
	fancy_takes_3_numbers = takes_3_numbers[o.before](function () {
		for (var i = 0, length = arguments.length; i < length; i++) {
			arguments[i] = parseFloat(arguments[i]);
		}
		return arguments;
	});

	test({
		name: 'before',
		_should: {
			error: {
				'takes_numbers error': true,
				'takes_3_numbers error': true
			}
		},
		'takes_numbers error': function () {
			takes_numbers('1');
		},
		'takes_numbers': function () {
			takes_numbers(1);
		},
		'fancy_takes_numbers': function () {
			fancy_takes_numbers('1');
		},
		'takes_3_numbers error': function () {
			takes_3_numbers(1,2,'3');
		},
		'takes_3_numbers': function () {
			takes_3_numbers(1,2,3);
		},
		'fancy_takes_3_numbers': function () {
			fancy_takes_3_numbers('1','2','3');
		}
	});

})();
