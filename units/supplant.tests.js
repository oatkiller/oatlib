test({
	name: 'supplant',
	'supplant': function () {
		Assert.areSame('a: 1, b: 2, c: 3','a: {a}, b: {b}, c: {c}'[o.supplant]({
			a: 1,
			b: 2,
			c: 3
		}));
	}
});
