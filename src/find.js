//= require <hasOwnProperty>
o.store(Array,'find',function (fn) {
	for (var property_name in this) {
		if (o.hasOwnProperty(this,property_name)) {
			if (fn.call(this,this[property_name],this)) {
				return this[property_name];
			}
		}
	}
	return null;
});
