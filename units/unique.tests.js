test({
	name: 'unique',
	'unique': function () {
		Assert.areSame([1,1,2,2,3,3,4,5][o.unique]().length,5);
	}
});
