//= require <array>
$$_invoke = o.invoke = function (n) {
	return n.apply(this,o.array(arguments).slice(1));
};
