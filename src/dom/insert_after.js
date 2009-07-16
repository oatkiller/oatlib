//= require <dom/reference>
$$_dom_insert_after = $$_dom.insert_after = function (target,payload) {
	var parent_node = target.parentNode, siblings = parent_node.childNodes;
	return parent_node.lastChild === target && parent_node.appendChild(payload) || parent_node.insertBefore(payload,target.nextSibling);
};
