test({
	name: 'stringify',
	'works': function () {
		Assert.areSame('{"key":"value"}',o.json.stringify({key: 'value'}));
	}
});
