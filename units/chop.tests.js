test({
	name: 'chop',
	'chop': function () {
		Assert.areSame([1,2,3,4][o.chop]().length,3);
	}
});
