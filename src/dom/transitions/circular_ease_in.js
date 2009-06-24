//= require <math/sqrt>
$$_store(function (t, b, c, d) {
	return -c * ($$_sqrt(1 - (t/=d)*t) - 1) + b;
},$ease_in,[$dom,$transitions,$circular]);
