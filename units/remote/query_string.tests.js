test({
	name: 'query_string',
	'works': function () {
		Assert.areSame('a=1&a=1&b=2&c=3',o.remote.query_string([
			{key: 'a',value: 1},
			{key: 'a',value: 1},
			{key: 'b',value: 2},
			{key: 'c',value: 3},
		]));
	}
});
