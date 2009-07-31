//= require <memoize>
//= require <regex>
//= require <string>

o.dom.class_name_test_regex = o.memoize(function (class_name) {
	return o.regex(o.string('(^|\\s+)',class_name,'(\\s+|$)'));
});
