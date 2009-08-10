//= require <dom/event/reference>
//= require <dom/event/get_abstraction>
//= require <dom/find_ancestor_or_self>
o.dom.event.prevent_select = function (test) {
	var body = document.body;
	body.onselectstart = function (e) {
		var oe = o.dom.event.get_abstraction(e),
		target = oe.get_target(),
		draggable = target && o.dom.find_ancestor_or_self(target,function (node) {
			return test(node,e,oe);
		});
		return draggable ? false : true;
	};
	o.dom.event.delegate({
		ancestor: body,
		type: 'mousedown',
		test: test,
		action: function (e,oe) {
			oe.prevent_default();
		}
	});
};
