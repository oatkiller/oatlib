test({
	name: 'prepend_child',
	setUp: function () {
		this.tmp_div = document.createElement('div');
		this.tmp_div.innerHTML = '<p></p><b></b><p></p>';
		this.payload = document.createElement('span');
	},
	tearDown: function () {
		delete this.tmp_div;
		delete this.payload;
	},
	'has children': function () {
		o.dom.prepend_child(this.tmp_div,this.payload);
		Assert.areSame(this.tmp_div.childNodes[0],this.payload);
	},
	'has no children': function () {
		this.tmp_div.innerHTML = '';
		o.dom.prepend_child(this.tmp_div,this.payload);
		Assert.areSame(this.tmp_div.childNodes[0],this.payload);
	}
});
