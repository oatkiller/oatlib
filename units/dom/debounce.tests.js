test({
	name: 'debounce',
	'works': function () {
		var worked = false,
		final_fn = (function () {
			worked = true;
		})[o.debounce]();
		final_fn();
		this.wait(function () {
			Assert.isTrue(worked);
		},120);
	},
	'works with threshold': function () {
		var worked = false,
		final_fn = (function () {
			worked = true;
		})[o.debounce](50);
		final_fn();
		this.wait(function () {
			Assert.isTrue(worked);
		},60);
	}
});
