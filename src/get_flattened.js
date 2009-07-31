//= require <inject>
o.store(Array,'get_flattened',function (memo,iterator) {
	return this[o.inject]([],function (a,b) {
		return a.concat(b);
	});
});
