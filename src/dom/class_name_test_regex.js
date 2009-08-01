//= require <regex>
//= require <string>

o.dom.class_name_test_regex = function (class_name) {
	return o.regex(o.string('(^|\\s+)',class_name,'(\\s+|$)'));
};
