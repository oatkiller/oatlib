test({
	name: 'find_preceding_sibling_or_self',
	'works': function () {
		// cant really unit test this as its written so this is a functional / integration tests. its still likely to catch any bugs cause this is a really thin method
		var my_div = document.createElement('div');
		my_div.innerHTML = '<span></span><p></p><b></b>';
		var my_b = my_div.lastChild;
		Assert.areSame('SPAN',o.dom.find_preceding_sibling_or_self(my_b,function (n) {
			return n.tagName && n.tagName === 'SPAN';
		}).tagName);
	}
});
