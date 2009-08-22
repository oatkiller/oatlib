//= require <array>
o.call = function (n) {
	return n.apply(this,o.array(arguments).slice(1));
};
