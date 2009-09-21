//= require <reduce>
//= require <curry>
//= require <hasOwnProperty>
//= require <return_true>
//= require <only_if>
/*
	Function: combine

	copies all the properties of arguments 2-n into argument 1

	Parameters:
		
		destination_object - the object to which all the properites will be copies
		nth_source_object - the first of n source objects from which properties will be copied

	Returns:
	
		destination_object

	See Also:

		super_combine

	Example:

		(start code)

		var obj1 = {a: 1},
		obj2 = {b: 2},
		my_combined_object = o.combine({},obj1,obj2});
		my_combined_object.a; // 1
		my_combined_object.b; // 2

		(end)
*/

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
	soft_combine_test = combine_test[o.only_if](function (an_obj,property_name,result_obj) {
		return !o.hasOwnProperty(result_obj,property_name);
	}),
	make_combinator = function (test) {
		return combinator[o.curry](iterator[o.curry](test));
	};

	o.combine = make_combinator(combine_test);
	o.soft_combine = make_combinator(soft_combine_test);
	o.super_combine = make_combinator(o.return_true);

})();
