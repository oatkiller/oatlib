tests.get_event = [
	{
		name: 'get_event',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
			//o.dom.event.set_get_event(); // makes it testable
		},
		'test get_event should return event if passed one': function () {
			var obj = {};
			var fn = o.dom.event.get_event;
			var result = fn(obj);
			result = fn(obj);
			Assert.areSame(result,obj);
		}/*, // makes it testable
		'test get_event should return window.event else': function () {
			var fn = o.dom.event.get_event,
			obj = {};
			window.event = obj;
			Assert.areSame(obj,window.event,'didnt set window.event');
			var result = fn();
			Assert.areSame(result,window.event);
		}*/
	}
];
