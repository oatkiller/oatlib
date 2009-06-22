//= require <transitions/core>
//= require <namespace>
o[$namespace]($$_transitions,[$quart])[$ease_out] = function (t, b, c, d) {
	return -c * ((t=t/d-1)*t*t*t - 1) + b;
};
