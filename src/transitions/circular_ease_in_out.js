//= require <transitions/core>
//= require <namespace>
o[$namespace]($$_transitions,[$circular])[$ease_in_out] = function (t, b, c, d) {
	if ((t/=d/2) < 1) {return -c/2 * (sqrt(1 - t*t) - 1) + b;}
	return c/2 * (sqrt(1 - (t-=2)*t) + 1) + b;
};
