test({
	name: 'first_index',
	'works': function () {
		Assert.areSame(0,[][o.first_index](),'empty array');
		Assert.areSame(0,[1][o.first_index](),'array with an item');
		var weird_array = [1,2,3];
		delete weird_array[0];
		Assert.areSame(1,weird_array[o.first_index](),'weird array');
	}
});
