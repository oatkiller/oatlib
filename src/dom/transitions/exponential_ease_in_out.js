//= require <math/pow>
$$_store(function (t, b, c, d) {
	if (t===0) {return b;}
	if (t==d) {return b+c;}
	if ((t/=d/2) < 1) {return c/2 * $$_pow(2, 10 * (t - 1)) + b;}
	return c/2 * (-$$_pow(2, -10 * --t) + 2) + b;
},$ease_in_out,[$dom,$transitions,$exponential]);
