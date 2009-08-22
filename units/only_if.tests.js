test({
	name: 'only_if',
	'works': function () {
		var payload = {},
		got_this = false;
		my_fn = (function (type,payload) {
			got_this = payload;
		})[o.only_if](function (type) {
			return type === 'on_drop';
		});

		my_fn('blah',payload);
		Assert.isFalse(got_this);
		my_fn('on_drop',payload);
		Assert.areSame(payload,got_this);
	}/*,
	'documentation': function () {
		var submitted = false,
		my_form = {
			submit: function () {
				submitted = true;
			}
		};
		var submit_the_form = function () {
			my_form.submit();
		}[o.only_if](confirm[o.curry]('are you sure?'));
		Assert.isFalse(submitted);
		submit_the_form();
		Assert.isFalse(submitted);
		submit_the_form();
		Assert.isTrue(submitted);

	}*/
});
