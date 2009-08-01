test({
	name: 'prevent_default',
	setUp: function () {
		o.dom.event.setup_prevent_default();
	},
	'should work with preventDefault': function () {
		var called_prevent_default = false,
		e = {
			preventDefault: function () {
				called_prevent_default = true;
			}
		};
		o.dom.event.prevent_default(e);
		Assert.isTrue(called_prevent_default);
	},
	'should work with returnValue': function () {
		var e = {
			returnValue: true
		};
		o.dom.event.prevent_default(e);
		Assert.isFalse(e.returnValue);
	}
});
