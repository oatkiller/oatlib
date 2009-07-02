tests.get_target = [
	{
		name: 'get_target',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test get_target should return e.target if it exists': function () {
			var obj = {};
			var fn = o.dom.event.get_event;
			var result = fn(obj);
			result = fn(obj);
			Assert.areSame(result,obj);
		}
	}
];

