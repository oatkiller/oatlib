tests.get_target = [
	{
		name: 'get_target',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test get_target should return e.target if it exists': function () {
			var target = {},
			obj = {target: target},
			fn = o.dom.event.get_target,
			result = fn(obj);
			result = fn(obj);
			Assert.areSame(result,target);
		}
	}
];
