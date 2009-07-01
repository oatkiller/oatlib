//= require <slice>
$$_take = $$_store(o,$take,function (fn) {
	return function () {
		return fn[$apply](arguments[0],$$_slice[$call](arguments,1));
	};
});
