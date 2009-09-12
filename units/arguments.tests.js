test({
	name: 'arguments',
	_should: {
		ignore: 'asdf'
	}
	'asdf': function () {
		var my_fn = function (a) {
			Assert.areSame(0,a);
			Assert.areSame(0,arguments[0]);
			Assert.areSame(arguments[0],a);

			a = 1;
			Assert.areNotSame(a,arguments[0]);
		};
		my_fn(0);
	}
});
