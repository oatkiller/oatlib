//= require <transitions/core>
//= require <namespace>
o[$namespace]($$_transitions,[$exponential])[$ease_out] = function (t, b, c, d) {
	return (t==d) ? b+c : c * (-pow(2, -10 * t/d) + 1) + b;
};
