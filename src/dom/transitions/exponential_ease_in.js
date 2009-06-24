//= require <math/pow>
$$_store(function (t, b, c, d) {
	return (t===0) ? b : c * $$_pow(2, 10 * (t/d - 1)) + b;
},$ease_in,[$dom,$transitions,$exponential]);
