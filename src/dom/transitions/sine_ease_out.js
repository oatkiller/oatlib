//= require <math/pi>
//= require <math/sin>
$$_store(function (t, b, c, d) {
	return c * $$_sin(t/d * ($$_pi/2)) + b;
},$ease_out,[$dom,$transitions,$sine]);
