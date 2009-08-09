test({
	name: 'capacitate',
	'works': function () {
		var count = 0,
		final_fn = (function () {
			count ++;
		})[o.capacitate]();
		final_fn();
		final_fn();
		final_fn();
		Assert.areSame(0,count);
		this.wait(function () {
			Assert.areSame(3,count);
		},120);
	},
	'works with threshold': function () {
		var count = 0,
		final_fn = (function () {
			count ++;
		})[o.capacitate](30);
		final_fn();
		final_fn();
		final_fn();
		Assert.areSame(0,count);
		this.wait(function () {
			Assert.areSame(3,count);
		},40);
	}
});
