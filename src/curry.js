//= require <array>
//= require <bind>
$$_curry = oatlib[$curry] = function (fn) {
	var args = $$_array(arguments);
	args[$splice](1,0,$$null);
	return $$_bind[$apply]($$null,args);
};
