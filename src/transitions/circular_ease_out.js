//= require <transitions/core>
//= require <namespace>
o[$namespace]($$_transitions,[$circular])[$ease_out] = function (t, b, c, d) {
	return c * sqrt(1 - (t=t/d-1)*t) + b;
};
