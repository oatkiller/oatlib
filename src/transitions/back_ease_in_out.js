//= require <transitions/core>
//= require <namespace>
o[$namespace]($$_transitions,[$back])[$ease_in_out] = function (t, b, c, d) {
	s = s || 1.70158;
	if ((t/=d/2) < 1) {return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;}
	return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
};
