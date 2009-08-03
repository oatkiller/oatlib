test({
	name: 'are_same',
	'works': function () {
		Assert.isTrue(o.are_same(1,1));
		Assert.isTrue(o.are_same(1,1,1));
		Assert.isFalse(o.are_same({},{}));
	}
});
