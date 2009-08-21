//= require <reduce>
//= require <curry>
//= require <hasOwnProperty>
//= require <return_true>
//= require <before>
(function () {

	var iterator = function (test,result_obj,an_obj) { // combines two objects
		for (var property_name in an_obj) {
			if (test(an_obj,property_name,result_obj)) {
				result_obj[property_name] = an_obj[property_name];
			}
		}
		return result_obj;
	},
	combinator = function (an_iterator,result_obj) { // combines any number of objects
		return o.slice(arguments,2)[o.reduce](an_iterator,result_obj);
	},
	combine_test = function (an_obj,property_name) { // curries combinator with a test to make sure the properties are on the subject argument directly, as opposed to being on its prototype
		return o.hasOwnProperty(an_obj,property_name);
	},
	soft_combine_test = combine_test[o.before](function (an_obj,property_name,result_obj) {
		return !o.hasOwnProperty(result_obj,property_name);
	}),
	make_combinator = function (test) {
		return combinator[o.curry](iterator[o.curry](test));
	};

	o.combine = make_combinator(combine_test);
	o.soft_combine = make_combinator(soft_combine_test);
	o.super_combine = make_combinator(o.return_true);

})();
