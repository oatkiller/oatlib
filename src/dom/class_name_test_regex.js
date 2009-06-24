//= require <memoize>
//= require <regex>
//= require <string>
$$_class_name_test_regex = o[$memoize](function (className) {
	return o[$regex](o[$string]('(^|\\s+)',className,'(\\s+|$)'));
});
