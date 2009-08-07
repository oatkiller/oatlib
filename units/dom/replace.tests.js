test({
	name: 'replace',
	'works': function () {
		var my_tmp_div = document.createElement('div'),
		my_span = document.createElement('span');
		my_tmp_div.innerHTML = '<b></b><i></i>';
		o.dom.replace(my_tmp_div.firstChild,my_span);
		Assert.areSame(my_span,my_tmp_div.firstChild);
	}
});
