//= require <transitions/core>
//= require <namespace>
o[$namespace]($$_transitions,[$quint])[$ease_out] = function (t, b, c, d) {
	return c*((t=t/d-1)*t*t*t*t + 1) + b;
};
