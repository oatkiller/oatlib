test({
	name: 'node',
	'works': function () {
		var myNode = o.dom.node('something');
		Assert.areSame(3,myNode.nodeType,'node failed to get node');
	}
});
