//= require <dom/event/reference>
//= require <dom/event/get_abstraction>
//= require <dom/find_ancestor_or_self>
$$_dom_event_prevent_select = $$_dom_event.prevent_select = function (test) {
	var body = document.body;
	body.onselectstart = function (e) {
		var oe = $$_dom_event_get_abstraction(e);
		!oe.event && alert(oe);
		target = oe.get_target(),
		draggable = $$_dom_find_ancestor_or_self(target,function (node) {
			return test(node,e,oe);
		});
		return draggable ? false : true;
	};
	$$_dom_event_delegate({
		ancestor: body,
		type: $mousedown,
		test: test,
		action: function (e,oe) {
			oe.prevent_default();
		}
	});
};

