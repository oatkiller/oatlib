//= require <transitions/core>
//= require <namespace>
o[$namespace]($$_transitions,[$quadratic])[$ease_out] = function (t, b, c, d) {
	return -c *(t/=d)*(t-2) + b;
};
