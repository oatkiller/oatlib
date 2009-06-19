//= require <slice>
//= require <array>
$$_bind = oatlib[$bind] = function (fn,obj) { // holds logic for curry
	var that = fn,
	oldArguments = $$_slice[$call](arguments,2);
	return function () {
		return that[$apply](obj,oldArguments[$concat]($$_array(arguments)));
	};
};
