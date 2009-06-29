$$_store(function (node,fn) {
	// test each ancestor until one passes the test, return that one
	var found = $$null;
	looking: do {
		if (fn[$call](node,node)) {
			found = node;
			break looking;
		}
	} while (node && (node = node[$parentNode]))
	return found;
},$find_ancestor_or_self,[$dom]);
