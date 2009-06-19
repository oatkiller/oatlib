//= require <slice>
//= require <array>

oat_function_prototype[$bind] = function (obj) { // holds the logic for curry
	var that = this(),
	oldArguments = $$_slice[$call](arguments,1);
	return function () {
		return that[$apply](obj,oldArguments[$concat]($$_array(arguments)));
	};
};
