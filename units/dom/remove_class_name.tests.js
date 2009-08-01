test({
	name: 'removeClassName',
	setUp: function () {
		this.element = document.createElement('div');
		document.body.appendChild(this.element);
	},
	tearDown: function () {
		try {
			document.body.removeChild(this.element);
		} catch (e) {}
	},
	'remove className': function () {
		var myElement;
		var setupElement = function () {
			myElement = document.createElement('div');
			myElement.className = 'foo bar woot';
		};

		setupElement();
		o.dom.remove_class_name(myElement,'foo');
		Assert.areSame('bar woot',myElement.className,'1');
		setupElement();
		o.dom.remove_class_name(myElement,'bar');
		Assert.areSame('foo woot',myElement.className,'2');
		setupElement();
		o.dom.remove_class_name(myElement,'woot');
		Assert.areSame('foo bar',myElement.className,'3');
	}
});
