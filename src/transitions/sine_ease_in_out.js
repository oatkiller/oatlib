//= require <transitions/core>
//= require <namespace>
o[$namespace]($$_transitions,[$sine])[$ease_in_out] = function (t, b, c, d) {
	return -c/2 * (cos(PI*t/d) - 1) + b;
};
