//= require <transitions/core>
//= require <namespace>
o[$namespace]($$_transitions,[$elastic])[$ease_in_out] = function (t, b, c, d) {
	var s;
	if (t===0) {return b;}  if ((t/=d/2)==2) {return b+c;}  if (!p) {p=d*(0.3*1.5);}
	if (!a || a < abs(c)) { a=c; s=p/4; }
	else {s = p/(2*PI) * asin(c/a);}
	if (t < 1) {return -0.5*(a*pow(2,10*(t-=1)) * sin( (t*d-s)*(2*PI)/p )) + b;}
	return a*pow(2,-10*(t-=1)) * sin( (t*d-s)*(2*PI)/p )*0.5 + c + b;
};

