test({
	name: 'call',
	'call': function () {
		var count = 0,
		fn = function () {
			count++;
		};
		Assert.areSame(count,0);
		o.call(fn);
		Assert.areSame(count,1);
		o.call(fn);
		Assert.areSame(count,2);

	},
	'documentation': function () {
var my_fn = function (a,b) {
	return a + b;
};
Assert.areSame(7,o.call(my_fn,3,4));
	}
});
