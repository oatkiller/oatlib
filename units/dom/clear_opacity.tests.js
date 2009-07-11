tests.clear_opacity = [
	{
		name: 'clear_opacity',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
		},
		testitworks: function () {
			var node = {
				style: {
					opacity: 'blah'
				}
			};
			o.dom.clear_opacity(node);
			Assert.areSame(node.style.opacity,'');
		},
		testitworksonwindows: function () {
			var node = {
				style: {
					filter: 'asdf'
				}
			};
			o.dom.clear_opacity(node);
			Assert.areSame(node.style.filter,'alpha(opacity=)');
		}
	}
];
