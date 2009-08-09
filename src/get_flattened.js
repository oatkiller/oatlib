//= require <reduce>
o.store(Array,'get_flattened',function (memo,iterator) {
	return this[o.reduce](function (a,b) {
		return a.concat(b);
	},[]);
});
