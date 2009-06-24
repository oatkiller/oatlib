//= require <math/pi>
//= require <math/cos>
$$_store(function (t, b, c, d) {
	return -c * $$_cos(t/d * ($$_pi/2)) + c + b;
},$ease_in,[$dom,$transitions,$sine]);
