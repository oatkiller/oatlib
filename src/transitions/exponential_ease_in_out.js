//= require <transitions/core>
//= require <namespace>
o[$namespace]($$_transitions,[$exponential])[$ease_in_out] = function (t, b, c, d) {
	if (t===0) {return b;}
	if (t==d) {return b+c;}
	if ((t/=d/2) < 1) {return c/2 * pow(2, 10 * (t - 1)) + b;}
	return c/2 * (-pow(2, -10 * --t) + 2) + b;
};
