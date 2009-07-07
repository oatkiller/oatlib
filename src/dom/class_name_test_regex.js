//= require <memoize>
//= require <regex>
//= require <string>
$$_dom_class_name_test_regex = $$_memoize(function (className) {
	return $$_regex($$_string('(^|\\s+)',className,'(\\s+|$)'));
});
