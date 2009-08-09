test({
	name: 'type_of',
	'works': function () {
		Assert.areSame('object',o.type_of({}));
		Assert.areSame('node',o.type_of(document.createElement('div')));
		Assert.areSame('array',o.type_of([]));
		Assert.areSame('null',o.type_of(null));
	}
});
