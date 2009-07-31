//= require <dom/reference>
//= require <dom/class_name_test_regex>
o.dom.has_class_name = function (element,class_name) {
	return o.dom.class_name_test_regex(class_name).test(element.className);
};
