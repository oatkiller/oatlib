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
	name: 'set_css',
	'works': function () {
		var tmp_div = document.createElement('div');
		tmp_div.className = 'oh-hellz-yah-woot';
		document.body.appendChild(tmp_div);
		Assert.areSame(0,tmp_div.offsetHeight);
		var remove = o.dom.set_css('.oh-hellz-yah-woot {height: 100px;}');
		this.wait(function () {
			Assert.areSame(100,tmp_div.offsetHeight);
			remove();
		},10);
	},
	'delete works': function () {
		var tmp_div = document.createElement('div');
		tmp_div.className = 'oh-hellz-yah-woot';
		document.body.appendChild(tmp_div);
		Assert.areSame(0,tmp_div.offsetHeight);
		var delete_them = o.dom.set_css('.oh-hellz-yah-woot {height: 100px;}');
		delete_them();
		this.wait(function () {
			Assert.areSame(0,tmp_div.offsetHeight,'couldnt delete');
		},10);
	}
});
