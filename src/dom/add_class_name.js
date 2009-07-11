//= require <dom/reference>
//= require <regex>
//= require <string>
$$_dom_add_class_name = $$_dom[$add_class_name] = function (element,className) {
	var current_className = element[$className];
	if (!$$_regex($$_string('(^|\\s+)',className,'(\\s+|$)'))[$test](current_className)) {
		element[$className] = [className,current_className][$join](current_className ? ' ' : '');
	}
	return element;
};
