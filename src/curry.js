//= require <array>
//= require <bind>
o.store(Function,'curry',function () {
	return this[o.bind].apply(this,[null].concat(o.array(arguments)));
});
