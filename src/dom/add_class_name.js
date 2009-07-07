//= require <dom/reference>
//= require <regex>
//= require <string>
$$_dom_add_class_name = $$_dom[$add_class_name] = function (element,className) {
	element[$className] = element[$className][$replace]($$_regex($$_string('^(?!.*',className,'(\\s+|$))')),$$_string(className,' '));
	return element;
};
