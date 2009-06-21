//= require <super_combine>
$$_store(function (prototype) { // produces a new generic object constructor function
	var fn = function () {
		return o[o($super_combine)][$apply]($$null,[this][$concat](arguments));
	};
	fn[$prototype] = prototype;
  return fn;
},$constructor);
