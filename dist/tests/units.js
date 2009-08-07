test({
	name: 'core',
	'core': function () {
		Assert.areEqual('http://oatlab.com/oatlib/v2',o);
	},
	'qname': function () {
		var sample_name = 'butt';
		Assert.areSame(o+':::'+sample_name,o.qname(sample_name));
	},
});
test({
	name: 'dom.update',
	'works': function () {
		var my_div = document.createElement('div');
		my_div.innerHTML = 'some stuff <b>asdf</b> asdf';
		Assert.areSame(3,my_div.childNodes.length);
		my_new_content = document.createElement('div');
		my_new_content.innerHTML = 'some stuff';
		var my_div_ref2 = o.dom.update(my_div,my_new_content);
		Assert.areSame(1,my_div.childNodes.length);
		Assert.areSame('DIV',my_div.firstChild.tagName);
		Assert.areSame(my_div,my_div_ref2);
	}
});
