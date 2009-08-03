//= require <hasOwnProperty>
o.store(Array,'each',function (fn) {
	var i = 0, property_name;
	for (property_name in this) {
		if (o.hasOwnProperty(this,property_name)) {
			fn.call(this, this[property_name], property_name, this);
		}
	}
});
