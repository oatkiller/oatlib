test({
	name: 'contains',
	'works': function () {
		Assert.isTrue([1,2,3][o.contains](1));
		Assert.isTrue([1,2,3][o.contains](0));
	}
});
