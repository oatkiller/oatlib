test({
	name: 'last',
	'last': function () {
		Assert.areSame([1,2,3][o.last](),3);
		Assert.areSame(o.last([1,2,3]),3);
	}
});
