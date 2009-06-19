//= require <slice>
//= require <array>

oat_function_prototype[$bind] = function (obj) { // holds the logic for curry
	var that = oat_function_prototype.currentObj,
	oldArguments = $$_slice[$call](arguments,1);
	return function () {
		return that[$apply](obj,oldArguments[$concat](arguments));
	};
};
