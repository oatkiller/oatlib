test({
	name: 'cartesian distance',
	'works': function () {
		Assert.areSame(5,o.cartesian.distance({x: 0, y: 0},{x: 3, y: 4}));
	}
});
