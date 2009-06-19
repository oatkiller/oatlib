//= require <inject>
//= require <array>
//= require <super_combine>
o[$constructor] = function (prototype) { // produces a new generic object constructor function
	var fn = function () {
		return o[$super_combine][$apply]($$null,[this][$concat](arguments));
	};
	fn[$prototype] = prototype;
  return fn;
};
