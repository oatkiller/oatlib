//= require <reduce>
o.store(Array,'flatten',function (memo,iterator) {
	return this[o.reduce](function (a,b) {
		return a.concat(b);
	},[]);
});
