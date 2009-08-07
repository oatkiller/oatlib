test({
	name: 'empty',
	'works': function () {
		var my_tmp_div = document.createElement('div');
		Assert.areSame(0,my_tmp_div.childNodes.length);
		o.dom.empty(my_tmp_div);
		Assert.areSame(0,my_tmp_div.childNodes.length);
		my_tmp_div.innerHTML = '<span></span><em></em><b>asdf</b><p>asdf</p>';
		Assert.areSame(4,my_tmp_div.childNodes.length);
		o.dom.empty(my_tmp_div);
		Assert.areSame(0,my_tmp_div.childNodes.length);
	}
});
