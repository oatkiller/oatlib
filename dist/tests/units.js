tests.core = [
	{
		name: 'core',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test core': function () {
			Assert.areEqual('http://oatlab.com/oatlib/v2',o);
		}
	}
];
tests.get_event = [
	{
		name: 'get_event',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
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
