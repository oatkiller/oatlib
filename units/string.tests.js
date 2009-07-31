test({
	name: 'string',
	'test string': function () {
		Assert.areSame('abcd',o.string('a','b','c','d'),'string failed');
	}
});
