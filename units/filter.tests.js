test({
	name: 'filter',
	'works on arrays': function () {
		var results = [1,2,3,4][o.filter](function (a) {return a % 2;});
		Assert.areSame(2,results.length);
		Assert.areSame(1,results[0]);
		Assert.areSame(3,results[1]);
	},
	'work on non arrays': function () {
		var results = o.filter({
			a: 1,
			b: 2,
			c: 3,
			d: 4
		},function (a) {return a % 2;});
		Assert.areSame(1,results.a);
		Assert.areSame(undefined,results.b);
		Assert.areSame(3,results.c);
		Assert.areSame(undefined,results.d);
	}
});
