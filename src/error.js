//= require <string>
//= require <array>
$$_error = o.error = function () {
	throw new Error($$_string.apply(null,$$_array(arguments)));
};
