//= require <math/sqrt>
$$_store(function (t, b, c, d) {
	return c * $$_sqrt(1 - (t=t/d-1)*t) + b;
},$ease_out,[$dom,$transitions,$circular]);
