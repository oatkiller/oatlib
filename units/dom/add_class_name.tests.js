test({
	name: 'addClassName',
	setUp: function () {
		this.element = {
			className: ''
		};
	},
	'no class name': function () {
		o.dom.add_class_name(this.element,'foo');
		Assert.areSame(this.element.className,'foo');
	},
	'some class names': function () {
		this.element.className = 'asdew asdf duck';
		o.dom.add_class_name(this.element,'foo');
		Assert.areSame('foo asdew asdf duck',this.element.className);
	},
	'exists already': function () {
		this.element.className = 'foo asdf';
		o.dom.add_class_name(this.element,'foo');
		Assert.areSame('foo asdf',this.element.className);
	}
});
