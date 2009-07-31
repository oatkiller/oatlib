test({
	name: 'bound',
	'works for under lower': function () {
		Assert.areSame(3,o.bound(2,3,5));
	},
	'works for exactly lower': function () {
		Assert.areSame(3,o.bound(3,3,5));
	},
	'works for within limits': function () {
		Assert.areSame(4,o.bound(4,3,5));
	},
	'works for at upper': function () {
		Assert.areSame(5,o.bound(5,3,5));
	},
	'works for above upper': function () {
		Assert.areSame(5,o.bound(6,3,5));
	}
});
