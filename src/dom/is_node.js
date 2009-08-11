//= require <dom/reference>
o.dom.is_node = function (obj) {
	return obj.nodeType && obj.nodeType !== undefined;
};
