//= require <hasOwnProperty>
o.store(Array,'first_result',function (fn) {
	var property_name, result;
	for (property_name in this) {
		if (o.hasOwnProperty(this,property_name)) {
			if (result = fn.call(this,this[property_name],this)) {
				return result;
			}
		}
	}
});

