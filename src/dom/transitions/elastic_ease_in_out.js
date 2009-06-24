//= require <math/abs>
//= require <math/pi>
//= require <math/asin>
//= require <math/pow>
//= require <math/sin>
//= require <math/pi>
$$_store(function (t, b, c, d) {
	var s;
	if (t===0) {return b;}  if ((t/=d/2)==2) {return b+c;}  if (!p) {p=d*(0.3*1.5);}
	if (!a || a < $$_abs(c)) { a=c; s=p/4; }
	else {s = p/(2*$$_pi) * $$_asin(c/a);}
	if (t < 1) {return -0.5*(a*$$_pow(2,10*(t-=1)) * $$_sin( (t*d-s)*(2*$$_pi)/p )) + b;}
	return a*$$_pow(2,-10*(t-=1)) * $$_sin( (t*d-s)*(2*$$_pi)/p )*0.5 + c + b;
},$ease_in_out,[$dom,$transitions,$elastic]);
