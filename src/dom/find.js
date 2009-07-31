//= require <dom/reference>

o.dom.find = function (iterate,node,test) {
	// calls test with node in this scope. if true, return node
	// if false return dom.find called in this scope  passed this iterate, iterate of node, and this test.
	return node && ((test.call(this,node) && node) || arguments.callee.call(this,iterate,iterate(node),test));
};
