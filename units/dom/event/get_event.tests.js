tests.get_event = [
	{
		name: 'get_event',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test get_event should return event if passed one': function () {
			var obj = {};
			var fn = o.dom.event.get_event;
			var result = fn(obj);
			result = fn(obj);
			Assert.areSame(result,obj);
		}
	}
];
