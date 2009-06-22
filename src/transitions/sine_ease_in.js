//= require <transitions/core>
//= require <namespace>
o[$namespace]($$_transitions,[$sine])[$ease_in] = function (t, b, c, d) {
	return -c * cos(t/d * (PI/2)) + c + b;
};
