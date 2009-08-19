//= require <is_array>
o.type_of = function (value) {
	var s = typeof value;
	if (s === 'object') {
		if (value) {
			if (o.is_array(value)) {
				s = 'array';
			} else if (value.nodeType !== undefined) {
			//} else if (o.dom.is_node(value)) {
				s = 'node';
			}
		} else {
			s = 'null';
		}
	} else if (s === 'function' && value instanceof RegExp) { // WTF safari bug
		s = 'object';
	}
	return s;
};
