//= require <transitions/core>
//= require <namespace>
o[$namespace]($$_transitions,[$back])[$ease_out] = function (t, b, c, d) {
	s = s || 1.70158;
	return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
};
