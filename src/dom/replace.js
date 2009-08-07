//= require <dom/reference>
o.dom.replace = function (node,new_node) {
	return node.parentNode.replaceChild(new_node,node);
};
