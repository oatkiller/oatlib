test({
	name: 'insert_after',
	setUp: function () {
		this.tmp_div = document.createElement('div');
		this.tmp_div.innerHTML = '<p></p><b></b><p></p>';
		this.payload = document.createElement('span');
	},
	tearDown: function () {
		delete this.tmp_div;
		delete this.payload;
	},
	'not last child': function () {
		o.dom.insert_after(this.tmp_div.childNodes[1],this.payload);
		Assert.areSame(this.tmp_div.childNodes[2],this.payload);
	},
	'last child': function () {
		o.dom.insert_after(this.tmp_div.childNodes[2],this.payload);
		Assert.areSame(this.tmp_div.childNodes[3],this.payload);
	}
	});
