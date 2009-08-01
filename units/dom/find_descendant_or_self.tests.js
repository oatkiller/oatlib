test({
	name: 'find_descendant_or_self',
	'works': function () {
		var my_div = document.createElement('div');
		my_div.innerHTML = '<span><b></b></span>';
		Assert.areSame('B',o.dom.find_descendant_or_self(my_div,function (node) {
			return node.tagName && node.tagName === 'B';
		}).tagName);
	},
	'checks self': function () {
		var my_div = document.createElement('div');
		my_div.innerHTML = '<span><b></b></span>';
		Assert.areSame(o.dom.find_descendant_or_self(my_div,function (node) {
			return node.tagName && node.tagName === 'DIV';
		}).tagName,'DIV');
	}
});
