//= require <math/pow>
$$_store(function (t, b, c, d) {
	return (t==d) ? b+c : c * (-$$_pow(2, -10 * t/d) + 1) + b;
},$ease_out,[$dom,$transitions,$exponential]);
