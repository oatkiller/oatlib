test({
	name: 'is_array',
	'works on arrays': function () {
		Assert.isTrue(o.is_array([]));
	},
	'works on non arrays': function () {
		Assert.isFalse(o.is_array({'0': 1, '1': 2, length: 2}));
	},
	'documentation': function () {
		Assert.isTrue(o.is_array([])); // true
		Assert.isFalse(o.is_array({})); // false

		// false
		Assert.isFalse(o.is_array({
			'0': 'a',
			'1': 'b',
			length: 2
		}));
	}
});
