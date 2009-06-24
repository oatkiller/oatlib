//= require <math/sqrt>
$$_store(function (t, b, c, d) {
	if ((t/=d/2) < 1) {return -c/2 * ($$_sqrt(1 - t*t) - 1) + b;}
	return c/2 * ($$_sqrt(1 - (t-=2)*t) + 1) + b;
},$ease_in_out,[$dom,$transitions,$circular]);
