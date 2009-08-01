test({
	name: 'is_tag_name',
	'works': function () {
		var tmp_div = document.createElement('div');
		Assert.isTrue(o.dom.is_tag_name(tmp_div,'DIV'));
	},
	'doest error on document': function () {
		Assert.isFalse(o.dom.is_tag_name(document,'anything'));
	},
	'doest error on window': function () {
		Assert.isFalse(o.dom.is_tag_name(window,'anything'));
	},
	'doest error on text node': function () {
		Assert.isFalse(o.dom.is_tag_name(document.createTextNode('asdf'),'anything'));
	}
});
