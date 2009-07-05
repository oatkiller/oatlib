//= require <slice>
$$_take = o[$take] = function (fn) {
	return function () {
		return fn[$apply](arguments[0],$$_slice[$call](arguments,1));
	};
};
