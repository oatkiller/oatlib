test({
	name: 'hide',
	'works': function () {
		var node = {
			style: {
				display: ''
			}
		};
		var result = o.dom.hide(node);
		Assert.areSame('none',node.style.display);
		Assert.areSame(node,result);
	}
});
