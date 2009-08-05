test({
	name: 'filter',
	'works on arrays': function () {
		var results = [1,2,3,4][o.filter](function (a) {return a % 2;});
		Assert.areSame(2,results.length);
		Assert.areSame(1,results[0]);
		Assert.areSame(3,results[1]);
	}
});
