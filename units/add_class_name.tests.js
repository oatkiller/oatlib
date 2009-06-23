tests.dom = [
	{
		name: 'addClassName',
		setUp: function () {
			this.element = document.createElement('div');
			document.body.appendChild(this.element);
			o = window['http://oatlab.com/oatlib/v2'];
		},
		tearDown: function () {
			try {
				document.body.removeChild(this.element);
			} catch (e) {}
		},
		testNoClassName: function () {
			o.add_class_name(this.element,'foo');
			Assert.isTrue(/(\s+|^)foo(\s+|$)/.test(this.element.className))
		},
		testSomeClassNames: function () {
			this.element.className = 'asdew asdf duck';
			o.add_class_name(this.element,'foo');
			Assert.areSame('foo asdew asdf duck',this.element.className);
		},
		testExistsAlready: function () {
			this.element.className = 'foo asdf';
			o.add_class_name(this.element,'foo');
			Assert.areSame('foo asdf',this.element.className);
		}
	}
];
