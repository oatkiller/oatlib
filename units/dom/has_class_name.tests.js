tests.has_class_name = [
	{
		name: 'has_class_name',
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
		'test element with several classes, finding first class': function () {
			this.element.className = 'foo bar gaz lulz';
			Assert.isTrue(o.dom.has_class_name(this.element,'foo'));
		},
		'test element with one class, finding it': function () {
			this.element.className = 'bar';
			Assert.isTrue(o.dom.has_class_name(this.element,'bar'));
		},
		'test element with several classes, finding second class': function () {
			this.element.className = 'bar lulz goat';
			Assert.isTrue(o.dom.has_class_name(this.element,'lulz'));
		},
		'test element with a classname, not finding a classname which is a substring of the elements class': function () {
			this.element.className = 'asdfnubzasdf';
			Assert.isFalse(o.dom.has_class_name(this.element,'nubz'));
		}
	}
];

