//= require <each>
o.store(Array,'inject',function (memo,iterator) {
	this[o.each](function (property) {
		memo = iterator.call(this,memo,property);
	});
	return memo;
});
