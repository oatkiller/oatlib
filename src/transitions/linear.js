//= require <transitions/core>
//= require <namespace>
$$_transitions[$linear] = function (t, b, c, d) {
	return c*t/d + b;
};
