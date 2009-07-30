//= require <dom/reference>
//= require <inject>
//= require <rcurry>
//= require <filter>
//= require <dom/array>
//= require <dom/is_tag_name>
//= require <dom/find_ancestor_or_self>
//= require <dom/event/delegate>
$$_dom_get_form_value_obj = $$_dom.get_form_value_obj = function (form_node) {
	var pairs = ['INPUT','TEXTAREA','OPTION'][o.inject]([],function (memo,tag_name) {
		return memo.concat($$_dom_array(form_node.getElementsByTagName(tag_name)));
	})[o.map](function (node) {
		var result = {};
		if (node.name !== '') { // they must have a name
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

		if (((node.type === 'checkbox' || node.type === 'radio') && node.checked === false) || (node.type === 'option' && node.selected === false)) {
			return false;
		}

		if (node.type === 'file' || node.type === 'submit') { // we dont handle these here
			return false;
		}

		if (node.value !== '') {
			result.value = node.value;
			return result;
		} else {
			return false;
		}
	})[o.filter](function (x) {
		return x !== false;
	});
	var last_submit_element_clicked = form_node.last_submit_element_clicked;
	if (last_submit_element_clicked.name !== '' && last_submit_element_clicked.value !== '') {
		pairs.push({
			key: last_submit_element_clicked.name,
			value: last_submit_element_clicked.value
		});
	}
	return pairs;
};

$$_dom_event_add_listener(document,'click',function (e,oe) {
	var target = oe.get_target();
	if (($$_dom_is_tag_name(target,'INPUT') || $$_dom_is_tag_name(target,'BUTTON')) && (target.type === 'submit')) {
		target.form.last_submit_element_clicked = target;
	}
});
