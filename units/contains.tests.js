test({
	name: 'contains',
	'works': function () {
		Assert.isTrue([1,2,3][o.contains](1));
		Assert.isFalse([1,2,3][o.contains](0));
		Assert.isTrue(['a','b'][o.contains]('a','b'));
	}
});
