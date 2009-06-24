//= require <math/pi>
//= require <math/cos>
$$_store(function (t, b, c, d) {
	return -c/2 * ($$_cos($$_pi*t/d) - 1) + b;
},$ease_in_out,[$dom,$transitions,$sine]);
