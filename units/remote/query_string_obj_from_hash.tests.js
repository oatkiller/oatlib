test({
	name: 'query_string_obj_from_hash',
	'works': function () {
		var obj1 = o.remote.query_string_obj_from_hash({
			a: 1,
			b: 2
		});
		var obj2 = [
			{key: 'a', value: 1},
			{key: 'b', value: 2}
		];
		Assert.areSame(obj1[0].key,obj2[0].key);
		Assert.areSame(obj1[0].value,obj2[0].value);
		Assert.areSame(obj1[1].key,obj2[1].key);
		Assert.areSame(obj1[1].value,obj2[1].value);
	}
});
