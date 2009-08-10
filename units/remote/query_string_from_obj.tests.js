test({
	name: 'query_string_from_obj',
	'works': function () {
		Assert.areSame('a=1&a=1&b=2&c=3',o.remote.query_string_from_obj([
			{key: 'a',value: 1},
			{key: 'a',value: 1},
			{key: 'b',value: 2},
			{key: 'c',value: 3}
		]));
	}
});
