test({
	name: 'update',
	'works': function () {
		var my_array = [1,2,3],
		new_data = [4,5,6];
		my_array[o.update](new_data);
		Assert.areSame(my_array[0],new_data[0]);
		Assert.areSame(my_array[1],new_data[1]);
		Assert.areSame(my_array[2],new_data[2]);
	}
});
