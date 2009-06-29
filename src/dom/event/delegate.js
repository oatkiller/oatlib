//= require <dom/reference>
//= require <dom/event/reference>
//= require <dom/event/add_listener>
//= require <dom/has_class_name>
//= require <dom/find_ancestor_or_self>
$$_store(function (hash) {
	var nodeName = hash[$nodeName], className = hash[$className], test = hash[$test] || function () {return $$true;}, ancestor = hash[$ancestor], action = hash[$action];
	$$_event[$add_listener](ancestor,hash[$type],function (e) {
		var target = e[$target], relatedTarget = e[$relatedTarget], reachedAncestor = $$false;

		var classNameTest = className ? function (node) {return $$_event[$has_class_name](node,className);} : function () {return $$true;},
		nodeNameTest = nodeName ? function (node) {return node[$nodeName] === nodeName} : function () {return $$true;};

		var interestingNode = $$_dom[$find_ancestor_or_self](target,function (node) {
			if (node === ancestor) {
				return (reachedAncestor = $$true);
			}
			return classNameTest(node) && nodeNameTest(node) && test(node,e);
		});

		if (!reachedAncestor && interestingNode) {
			if (relatedTarget) {
				if (interestingNode === relatedTarget || interestingNode[$contains](relatedTarget)) {
					return;
				}
			}
			e.delegateTarget = interestingNode;
			action(e);
		}
		
	});
},$delegate,[$dom,$event])
