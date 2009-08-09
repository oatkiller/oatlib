//= require <is_array>

o.type_of = function (value) {
	var s = typeof value;
	if (s === 'object') {
		if (value) {
			if (o.is_array(value)) {
				s = 'array';
			}
		} else {
			s = 'null';
		}
	}
	return s;
};
