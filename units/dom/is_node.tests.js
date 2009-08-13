test({
	name: 'is_node',
	'works': function () {
		Assert.isTrue(o.dom.is_node(document),'document');
		Assert.isTrue(o.dom.is_node(document.body),'document.body');
		Assert.isTrue(o.dom.is_node(document.createTextNode('sadf')),'new text node');
		Assert.isFalse(o.dom.is_node({}),'object literal');
	}
});
