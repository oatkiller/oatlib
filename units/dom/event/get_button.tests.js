test({
	name: 'get_button',
	setUp: function () {
		o.dom.event.setup_get_button();
	},
	'test get_button should return right if which is set to 3': function () {
		var e = {
			which: 3,
			button: 0
		};
		Assert.areSame(o.dom.event.get_button(e),'right');
	},
	'test get_button should return left if which is set to not 3': function () {
		var e = {
			which: 2,
			button: 0
		};
		Assert.areSame(o.dom.event.get_button(e),'left');
	},
	'test get_button should return right if button is set to 2 and which isnt exist': function () {
		var e = {
			button: 2
		};
		Assert.areSame(o.dom.event.get_button(e),'right');
	},
	'test get_button should return left if button is set to not 2 and which isnt exist': function () {
		var e = {
			button: 1
		};
		Assert.areSame(o.dom.event.get_button(e),'left');
	}
});
