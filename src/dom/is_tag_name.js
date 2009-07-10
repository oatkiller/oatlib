//= require <dom/reference>
$$_dom_is_tag_name = $$_dom[$is_tag_name] = function (node,name) {
	return node[$tagName] === name;
};
