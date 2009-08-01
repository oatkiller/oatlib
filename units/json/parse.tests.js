test({
	name: 'parse',
	'works': function () {
		var obj = o.json.parse('{"key": "value"}');
		Assert.areSame('value',obj.key);
	}
});
