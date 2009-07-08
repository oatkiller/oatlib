//= require <curry>
//= require <rcurry>
//= require <dom/event/reference>
//= require <dom/find_ancestor_or_self>
//= require <dom/event/add_listener>
(function () {
	$$_dom_event_delegate = $$_dom_event[$delegate] = function (options) {
		// option has
		// ancestor
		// type
		// test
		// action
		var ancestor = options[$ancestor],
		action = options[$action],
		test = options[$test];
		return $$_dom_event_add_listener(ancestor,options[$type],function (e,oe) {
			if (oe[$delegate_target] = $$_dom_find_ancestor_or_self(oe[$get_target](),test[$$_o$rcurry](e,oe),ancestor)) {
				return action[$apply](this,arguments);
			}
		});
	};
})();
