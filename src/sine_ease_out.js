//= require <transitions/core>
//= require <namespace>
o[$namespace]($$_transitions,[$sine])[$ease_out] = function (t, b, c, d) {
	return c * sin(t/d * (PI/2)) + b;
};

