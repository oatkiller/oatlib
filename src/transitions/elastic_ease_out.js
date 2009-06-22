//= require <transitions/core>
//= require <namespace>
o[$namespace]($$_transitions,[$elastic])[$ease_out] = function (t, b, c, d) {
	var s;
	if (t===0) {return b;}  if ((t/=d)==1) {return b+c;}  if (!p) {p=d*0.3;}
	if (!a || a < abs(c)) { a=c; s=p/4; }
	else {s = p/(2*PI) * asin(c/a);}
	return (a*pow(2,-10*t) * sin( (t*d-s)*(2*PI)/p ) + c + b);
};
