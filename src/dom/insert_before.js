$$_store(function (node_to_insert,target_node) {
	return target_node[$parentNode][$insertBefore](node_to_insert,target_node);
},$insert_before,[$dom]);
