//= require <dom/reference>
//= require <dom/class_name_test_regex>
$$_dom_remove_class_name = $$_dom.remove_class_name = function (element,className) {
	element.className = element.className.replace(
		$$_dom_class_name_test_regex(className),
		'$1$2'
	).replace(
		/\s+/g,
		' '
	).replace(
		/(^\s|\s$)/g,
		emptyString
	);
	return element;
};
