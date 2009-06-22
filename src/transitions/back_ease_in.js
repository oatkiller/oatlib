//= require <transitions/core>
//= require <namespace>
o[$namespace]($$_transitions,[$back])[$ease_in] = function (t, b, c, d) {
	s = s || 1.70158;
	return c*(t/=d)*t*((s+1)*t - s) + b;
};
