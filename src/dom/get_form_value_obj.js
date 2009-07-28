//= require <dom/reference>
//= require <inject>
//= require <rcurry>
//= require <filter>
//= require <dom/array>
//= require <dom/is_tag_name>
//= require <dom/find_ancestor_or_self>
$$_dom_get_form_value_obj = $$_dom.get_form_value_obj = function (form_node) {
	return ['INPUT','TEXTAREA','OPTION'][o.inject]([],function (memo,tag_name) {
		return memo.concat($$_dom_array(form_node.getElementsByTagName(tag_name)));
	})[o.map](function (node) {
		var result = {};
		if ('name' in node) { // they must have a name
			result.key = node.name;
		} else if ($$_dom_is_tag_name(node,'OPTION')) { // its an option, so the name is on the select isntead

			// find the select
			var select = $$_dom_find_ancestor_or_self(node,$$_dom_is_tag_name[o.rcurry]('SELECT'));

			// set key to the selects name.
			if ('name' in select) {
				result.key = select.name;
			}
		}
		if (!('key' in result)) { // we didnt get a name, cancel
			return false;
		}

		if (('checked' in node && node.checked === false) || ('selected' in node && node.selected === false)) { // if its a checkbox, radio button, or option and its not selected, we dont want it
			return false;
		}

		if ('value' in node) {
			result.value = node.value;
			return result;
		} else {
			return false;
		}
	})[o.filter](function (x) {
		return x !== false;
	});
};

