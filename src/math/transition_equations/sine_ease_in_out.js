//= require <math/transition_equations/reference>
//= require <math/cos>
$$_math_transition_equations_sine_ease_in_out = $$_math_transition_equations[$sine_ease_in_out] = function (t, b, c, d) {
	return -c/2 * ($$_cos($$_pi*t/d) - 1) + b;
}

