//= require <is_array>
//= require <dom/is_node>

o.type_of = function (value) {
	var s = typeof value;
	if (s === 'object') {
		if (value) {
			if (o.is_array(value)) {
				s = 'array';
			} else if (o.dom.is_node(value)) {
				s = 'node';
			}
		} else {
			s = 'null';
		}
	}
	return s;
};
