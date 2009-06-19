//= require <array>
//= require <bind>
oat_function_prototype[$curry] = function () {// logic lives in bind
	var that = this();
	var bind = oat_function_prototype[$bind];
	return (oat_function_prototype[$curry] = function () {
		return bind[$apply](that,[$$null][$concat](arguments));
	})[$apply](that,arguments);
};
