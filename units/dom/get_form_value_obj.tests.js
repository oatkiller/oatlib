test({
	name: 'get_form_value_obj',
	tearDown: function () {
		this.tmp_div.parentNode.removeChild(this.tmp_div);
	},
	'works': function () {
		var tmp_div;
		this.tmp_div = tmp_div = document.createElement('div');
		tmp_div.innerHTML = '<form method="get" action="index.html" id="my_form" onsubmit="return false;"><fiedset><input name="a" value="1" type="password" /><input name="b" value="2" type="hidden" /><input name="c" value="3" type="submit" id="push_it" /><select name="d"><optgroup label="nope"><option value="4">asdf</option></optgroup></select></fieldset></form>';
		document.body.appendChild(tmp_div);
		YAHOO.util.UserAction.click(document.getElementById('push_it'));
		var value_obj = o.dom.get_form_value_obj(document.getElementById('my_form'));
		Assert.areSame('1',value_obj.a);
		Assert.areSame('2',value_obj.b);
		Assert.areSame('3',value_obj.c);
		Assert.areSame('4',value_obj.d);

	}
});
