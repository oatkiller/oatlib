//= require <dom/reference>
//= require <dom/class_name_test_regex>
$$_dom_has_class_name = $$_dom[$has_class_name] = function (element,className) {
	return $$_dom_class_name_test_regex(className)[$test](element[$className]);
};
