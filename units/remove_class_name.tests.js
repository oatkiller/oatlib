tests.remove_class_name = [
	{
		name: 'removeClassName',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
			this.element = document.createElement('div');
			document.body.appendChild(this.element);
		},
		tearDown: function () {
			try {
				document.body.removeChild(this.element);
			} catch (e) {}
		},
		testRemoveClassName: function () {
			var myElement;
			var setupElement = function () {
				myElement = document.createElement('div');
				myElement.className = 'foo bar woot';
			};

			setupElement();
			o.remove_class_name(myElement,'foo');
			Assert.areSame('bar woot',myElement.className,'1');
			setupElement();
			o.remove_class_name(myElement,'bar');
			Assert.areSame('foo woot',myElement.className,'2');
			setupElement();
			o.remove_class_name(myElement,'woot');
			Assert.areSame('foo bar',myElement.className,'3');
		}
	}
];
