//= require <dom/reference>
o.dom.is_node = function (obj) {
	return obj === undefined || obj.nodeType === undefined ? false : true;
};
