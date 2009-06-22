//= require <transitions/core>
//= require <namespace>
o[$namespace]($$_transitions,[$cubic])[$ease_in] = function (t, b, c, d) {
				return c*(t/=d)*t*t + b;
};
