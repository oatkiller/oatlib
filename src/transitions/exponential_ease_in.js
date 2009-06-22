//= require <transitions/core>
//= require <namespace>
o[$namespace]($$_transitions,[$exponential])[$ease_in] = function (t, b, c, d) {
	return (t===0) ? b : c * pow(2, 10 * (t/d - 1)) + b;
};
