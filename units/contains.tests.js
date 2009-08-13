test({
	name: 'contains',
	'works': function () {
		Assert.isTrue([1,2,3][o.contains](1),'contains 1');
		Assert.isFalse([1,2,3][o.contains](0),'doesnt contain 0');
		Assert.isTrue(['a','b'][o.contains]('a','b'),'contains a and b');
	}
});
