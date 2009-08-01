test({
	name: 'get_event',
	'test get_event should return event if passed one': function () {
		var obj = {};
		var fn = o.dom.event.get_event;
		var result = fn(obj);
		result = fn(obj);
		Assert.areSame(result,obj);
	}, // makes it testable
	'test get_event should return window.event else': function () {
		var my_window = {
			event: {}
		};
		o.dom.event.setup_get_event(my_window);

		var fn = o.dom.event.get_event;

		var result = fn();

		Assert.areSame(result,my_window.event);
	}
});
