tests.add_class_name = [
	{
		name: 'addClassName',
		setUp: function () {
			this.element = {
				className: ''
			};
			o = window['http://oatlab.com/oatlib/v2'];
		},
		testNoClassName: function () {
			o.dom.add_class_name(this.element,'foo');
			Assert.areSame(this.element.className,'foo');
		},
		testSomeClassNames: function () {
			this.element.className = 'asdew asdf duck';
			o.dom.add_class_name(this.element,'foo');
			Assert.areSame('foo asdew asdf duck',this.element.className);
		},
		testExistsAlready: function () {
			this.element.className = 'foo asdf';
			o.dom.add_class_name(this.element,'foo');
			Assert.areSame('foo asdf',this.element.className);
		}
	}
];
