//= require <array>
//= require <super_combine>
$$_constructor = o[$constructor] = function (prototype) { // produces a new generic object constructor function
	var fn = function () {
		return $$_super_combine[$apply]($$null,[this][$concat]($$_array(arguments)));
	};
	fn[$prototype] = prototype;
  return fn;
};
