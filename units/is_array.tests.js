test({
	name: 'is_array',
	'works on arrays': function () {
		Assert.isTrue(o.is_array([]));
	},
	'works on non arrays': function () {
		Assert.isFalse(o.is_array({'0': 1, '1': 2, length: 2}));
	}
});
