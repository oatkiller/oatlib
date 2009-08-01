test({
	name: 'unhide',
	'works': function () {
		var my_div = document.createElement('div');
		my_div.style.display = 'none';
		var result = o.dom.unhide(my_div);
		Assert.areSame(my_div,result);
		Assert.areSame('',my_div.style.display);
	}
});
