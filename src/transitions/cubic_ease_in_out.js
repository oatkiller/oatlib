//= require <transitions/core>
//= require <namespace>
o[$namespace]($$_transitions,[$cubic])[$ease_in_out] = function (t, b, c, d) {
	if ((t/=d/2) < 1) {return c/2*t*t*t + b;}
	return c/2*((t-=2)*t*t + 2) + b;
};
