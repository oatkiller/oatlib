//= require <dom/reference>
$$_dom_create_element = $$_dom.create_element = function (tag_name) {
	return document.createElement(tag_name);
};
