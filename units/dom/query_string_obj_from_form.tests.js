test({
	name: 'query_string_obj_from_form',
	tearDown: function () {
		this.tmp_div.parentNode.removeChild(this.tmp_div);
	},
	'works': function () {
		var tmp_div;
		this.tmp_div = tmp_div = document.createElement('div');
		tmp_div.innerHTML = '<form method="get" action="index.html" id="my_form" onsubmit="return false;"><fiedset><input name="a" id="blah-blah-a" value="1" type="password" /><input name="b" id="blah-blah-b" value="2" type="hidden" /><input name="c" value="3" type="submit" id="push_it" /><select name="d" id="blah-blah-d"><optgroup label="nope"><option value="4">asdf</option></optgroup></select></fieldset></form>';
		document.body.appendChild(tmp_div);
		YAHOO.util.UserAction.click(document.getElementById('push_it'));
		var ra = o.dom.query_string_obj_from_form(document.getElementById('my_form'));

		var get_obj_by_key = function (key) {
			var the_one;
			for (var property_name in ra) {
				var obj = ra[property_name];
				if (obj.key === key) {
					return obj;
				}
			}
		};

		Assert.areSame('1',get_obj_by_key('a').value);
		Assert.areSame('2',get_obj_by_key('b').value);
		Assert.areSame('3',get_obj_by_key('c').value);
		Assert.areSame('4',get_obj_by_key('d').value);

		var nodes = ['a','b','push_it','d'];
		for (var i = 0; i < nodes.length; i++) {
			nodes[i] = document.getElementById(nodes[i] !== 'push_it' ? 'blah-blah-' + nodes[i] : nodes[i]);
		}

		Assert.areSame(nodes[0],get_obj_by_key('a').node,'a');
		Assert.areSame(nodes[1],get_obj_by_key('b').node,'b');
		Assert.areSame(nodes[2],get_obj_by_key('c').node,'c');
		Assert.areSame(nodes[3],get_obj_by_key('d').node,'d');

	}
});
