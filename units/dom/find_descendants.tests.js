test({
	name: 'find_descendants',
	'works': function () {
		var tmp_div = document.createElement('div');
		tmp_div.innerHTML = '<span></span><b></b><strong></strong><p></p>';
		var results = o.dom.find_descendants(tmp_div,function (node) {
			return node.tagName === 'DIV' || node.tagName === 'B' || node.tagName === 'STRONG';
		});
		Assert.areSame(3,results.length);
	}
});
