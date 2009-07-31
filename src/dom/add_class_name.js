//= require <dom/reference>
//= require <regex>
//= require <string>
o.dom.add_class_name = function (element,class_name) {
	var current_class_name = element.className;
	if (!o.regex(o.string('(^|\\s+)',class_name,'(\\s+|$)')).test(current_class_name)) {
		element.className = [class_name,current_class_name].join(current_class_name ? ' ' : empty_string);
	}
	return element;
};
