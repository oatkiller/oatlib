test({
	name: 'clear_opacity',
	'works': function () {
		var node = {
			style: {
				opacity: 'blah'
			}
		};
		o.dom.clear_opacity(node);
		Assert.areSame(node.style.opacity,'');
	},
	'worksonwindows': function () {
		var node = {
			style: {
				filter: 'asdf'
			}
		};
		o.dom.clear_opacity(node);
		Assert.areSame(node.style.filter,'');
	}
});
