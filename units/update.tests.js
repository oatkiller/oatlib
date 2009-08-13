test({
	name: 'update',
	'works on arrays': function () {
		var my_array = [1,2,3],
		new_data = [4,5,6];
		my_array[o.update](new_data);
		Assert.areSame(my_array[0],new_data[0]);
		Assert.areSame(my_array[1],new_data[1]);
		Assert.areSame(my_array[2],new_data[2]);
	},
	'works on generics': function () {
		var my_obj = {
			'a': 1,
			'b': 2,
			'c': 3
		},
		new_obj = {
			a: 2,
			b: 3,
			c: 4
		};
		Assert.areSame(2,new_obj.a);
		Assert.areSame(3,new_obj.b);
		Assert.areSame(4,new_obj.c);
	},
	'kills it all': function () {
		var my_obj = {
			'a': 1,
			'b': 2,
			'c': 3
		},
		my_new_obj = {
			'A': 2,
			'B': 3,
			'C': 4
		};
		o.update(my_obj,my_new_obj);
		Assert.areSame(2,my_obj.A);
		Assert.isUndefined(my_obj.a);
		Assert.areSame(3,my_obj.B);
		Assert.isUndefined(my_obj.b);
		Assert.areSame(4,my_obj.C);
		Assert.isUndefined(my_obj.c);

	}
});
