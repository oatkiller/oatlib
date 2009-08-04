//= require <hasOwnProperty>
o.store(Array,'every',function (fn) {
	for (var property_name in this) {
		if (o.hasOwnProperty(this,property_name)) {
			if (!fn.call(this,this[property_name],property_name)) {
				return false;
			}
		}
	}
	return true;
});
