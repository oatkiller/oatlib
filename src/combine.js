//= require <inject>
//= require <curry>
(function () {

	var iterator = function (test,result_obj,an_obj) { // combines two objects
		for (var property_name in an_obj) {
			if (test(an_obj,property_name)) {
				result_obj[property_name] = an_obj[property_name];
			}
		}
		return result_obj;
	},
	combinator = function (an_iterator,result_obj) { // combines any number of objects
		return o.slice(arguments,2)[o.inject](result_obj,an_iterator);
	};

	o.combine = combinator[o.curry](iterator[o.curry](function (an_obj,property_name) { // curries combinator with a test to make sure the properties are on the subject argument directly, as opposed to being on its prototype
		return an_obj.hasOwnProperty(property_name);
	}));
	// curries combinator with a test that takes every property, including ones on the subject arguments __proto__
	o.super_combine = combinator[o.curry](iterator[o.curry](function () {return true;}));

})();
