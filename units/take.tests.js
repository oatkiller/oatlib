test({
	name: 'take',
	'take': function () {

		var join = o.take(Array.prototype.join);

		Assert.areSame(join([1,2,3]),'1,2,3');

	}
});
