test({
	name: 'delegate',
	tearDown: function () {
		document.body.removeChild(this.my_div);
	},
	'works': function () {
		var my_div;
	 	this.my_div = my_div	= document.createElement('div');
		my_div.innerHTML = '<span><em></em></span>';
		document.body.appendChild(my_div);
		var em = my_div.getElementsByTagName('em')[0];
		var worked = false;
		var cancel_it = o.dom.event.delegate({
			ancestor: my_div,
			test: function (n) {
				return n.tagName !== undefined && n.tagName === 'SPAN';
			},
			action: function (e,oe) {
				worked = true;
			}
		});
		YAHOO.util.UserAction.click(em);
		var that = this;
		this.wait(function () {
			Assert.isTrue(worked);
			worked = false;
			cancel_it();
			YAHOO.util.UserAction.click(em);
			that.wait(function () {
				Assert.isFalse(worked);
			},10);
		},10);
	}
});
