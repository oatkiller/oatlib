test({
	name: 'is not false',
	'works': function () {
		Assert.isTrue(o.is_not_false('asdf'));
		Assert.isFalse(o.is_not_false(false));
		Assert.isTrue(o.is_not_false(null));
	},
});
