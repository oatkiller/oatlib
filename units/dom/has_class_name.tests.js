test({
	name: 'has_class_name',
	setUp: function () {
		this.element = document.createElement('div');
		document.body.appendChild(this.element);
	},
	tearDown: function () {
		try {
			document.body.removeChild(this.element);
		} catch (e) {}
	},
	'element with several classes, finding first class': function () {
		this.element.className = 'foo bar gaz lulz';
		Assert.isTrue(o.dom.has_class_name(this.element,'foo'));
	},
	'element with one class, finding it': function () {
		this.element.className = 'bar';
		Assert.isTrue(o.dom.has_class_name(this.element,'bar'));
	},
	'element with several classes, finding second class': function () {
		this.element.className = 'bar lulz goat';
		Assert.isTrue(o.dom.has_class_name(this.element,'lulz'));
	},
	'element with a classname, not finding a classname which is a substring of the elements class': function () {
		this.element.className = 'asdfnubzasdf';
		Assert.isFalse(o.dom.has_class_name(this.element,'nubz'));
	}
});
