test({
	name: 'reduce',
	'works': function () {
		Assert.areSame(6,[0, 1, 2, 3][o.reduce](function (a,b) {return a + b;}));
		var flattened = [[0,1], [2,3], [4,5]][o.reduce](function(a,b) {
			return a.concat(b);
		}, []);
		for (var i = 0; i <= 5; i++) {
			Assert.areSame(i,flattened[i]);
		}
	},
	'fine grain': function () {
		var expected_previous = [0,1],
		expected_current = [1,2],
		count = 0;
		[0,1,2][o.reduce](function (previous,current) {
			Assert.areSame(expected_previous[count],previous);
			Assert.areSame(expected_current[count],current);
			count++;
			return current;
		});
		Assert.areSame(2,count);
	}
});
