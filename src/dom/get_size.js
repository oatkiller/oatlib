//= require <dom/reference>
o.dom.get_size = function (node) {
	return {
		width: node.offsetWidth,
	 	height: node.offsetHeight
	};
};
