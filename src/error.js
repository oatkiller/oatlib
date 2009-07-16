//= require <string>
//= require <array>
o.error = function () {
	throw new $$Error($$_string.apply($$null,$$_array(arguments)));
};
