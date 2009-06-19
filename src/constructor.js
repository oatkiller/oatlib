//= require <inject>
//= require <array>
//= require <super_combine>
$$_constructor = oatlib[$constructor] = function (prototype) { // produces a new generic object constructor function
	var fn = function () {
    $$_inject[$apply]($$null,[this,$$_super_combine][$concat]($$_array(arguments)));
  };
	fn[$prototype] = prototype;
  return fn;
};
