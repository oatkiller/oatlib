//= require <array>
//= require <every>
o.are_same = function (first) {
	return o.array(arguments)[o.every](function (e) {
		return e === first;
	});
};
