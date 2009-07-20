//= require <dom/reference>
$$_dom_prepend_child = $$_dom.prepend_child = function (parent_node,node_to_insert) {
	return parent_node.childNodes.length ? parent_node.insertBefore(node_to_insert,parent_node.childNodes[0]) : parent_node.appendChild(node_to_insert);
};
