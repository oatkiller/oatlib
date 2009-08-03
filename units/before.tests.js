test({
	name: 'before',
	'works': function () {
		var payload = {},
		got_this = false;
		my_fn = (function (type,payload) {
			got_this = payload;
		})[o.before](function (type) {
			return type === 'on_drop';
		});

		my_fn('blah',payload);
		Assert.isFalse(got_this);
		my_fn('on_drop',payload);
		Assert.areSame(payload,got_this);
	}
});
