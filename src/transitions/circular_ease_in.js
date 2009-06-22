//= require <transitions/core>
//= require <namespace>
o[$namespace]($$_transitions,[$circular])[$ease_in] = function (t, b, c, d) {
	return -c * (sqrt(1 - (t/=d)*t) - 1) + b;
};
