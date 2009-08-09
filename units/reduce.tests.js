test({
	name: 'reduce',
	'works': function () {
		Assert.areSame(6,[0, 1, 2, 3][o.reduce](function (a,b) {return a + b;}));
		var flattened = [[0,1], [2,3], [4,5]].reduce(function(a,b) {
			return a.concat(b);
		}, []);
		for (var i = 0; i <= 5; i++) {
			Assert.areSame(i,flattened[i]);
		}
	}
});
