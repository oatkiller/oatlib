test({
	name: 'remove',
	'works': function () {
		var my_div = document.createElement('div');
		my_div.innerHTML = '<span></span>';
		var result = o.dom.remove(my_div.childNodes[0]);
		Assert.areSame(0,my_div.childNodes.length);
		Assert.areSame('SPAN',result.tagName);
	}
});
