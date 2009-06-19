//= require <array>
//= require <bind>
oat_function_prototype[$curry] = function () {// logic lives in bind
	return (oat_function_prototype[$curry] = function () {
		var that = oat_function_prototype.currentObj;
		return that[o]()[$bind][$apply](this,[$$null][$concat](arguments));
		//return bind[$apply](that,[$$null][$concat](arguments));
	})[$apply](this,arguments);
};
