//= require <math/pi>
//= require <math/sin>
//= require <math/pow>
//= require <math/asin>
//= require <math/abs>
$$_store(function (t, b, c, d) {
	var s;
	if (t===0) {return b;}  if ((t/=d)==1) {return b+c;}  if (!p) {p=d*0.3;}
	if (!a || a < $$_abs(c)) { a=c; s=p/4; }
	else {s = p/(2*$$_pi) * $$_asin(c/a);}
	return (a*$$_pow(2,-10*t) * $$_sin( (t*d-s)*(2*$$_pi)/p ) + c + b);
},$ease_out,[$dom,$transitions,$elastic]);