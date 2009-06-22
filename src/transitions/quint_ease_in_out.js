//= require <transitions/core>
//= require <namespace>
o[$namespace]($$_transitions,[$quint])[$ease_in_out] = function (t, b, c, d) {
	if ((t/=d/2) < 1) {return c/2*t*t*t*t*t + b;}
	return c/2*((t-=2)*t*t*t*t + 2) + b;
};
