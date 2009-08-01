test({
	name: 'insert_before',
	setUp: function () {
		this.tmp_div = document.createElement('div');
		this.tmp_div.innerHTML = '<p></p><b></b><p></p>';
		this.payload = document.createElement('span');
	},
	tearDown: function () {
		delete this.tmp_div;
		delete this.payload;
	},
	'works': function () {
		o.dom.insert_before(this.tmp_div.childNodes[1],this.payload);
		Assert.areSame(this.tmp_div.childNodes[1],this.payload);
	}
});
