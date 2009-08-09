//= require <each>
o.store(Array,'inject',function (memo,iterator) {
	this[o.each](function (property,property_name) {
		memo = iterator.call(this,memo,property,this);
	});
	return memo;
});
