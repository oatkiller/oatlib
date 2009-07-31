//= require <dom/reference>
//= require <dom/class_name_test_regex>
o.dom.remove_class_name = function (element,class_name) {
	element.className = element.className.replace(
		o.dom.class_name_test_regex(class_name),
		'$1$2'
	).replace(
		/\s+/g,
		' '
	).replace(
		/(^\s|\s$)/g,
		empty_string
	);
	return element;
};
