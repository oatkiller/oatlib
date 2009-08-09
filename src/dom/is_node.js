//= require <dom/reference>
o.dom.is_node = function (obj) {
	return typeof obj === 'object' && obj.nodeType !== undefined;
};
