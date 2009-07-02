tests.get_key = [
	{
		name: 'get_key',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
		},
		'test get_key returns keyCode for key if avail': function () {
			var obj = {keyCode: 1, which: 2};
			var fn = o.dom.event.get_key;
			var result = fn(obj).key;
			Assert.areSame(result,1);
		},
		'test get_key returns which for key if keyCode is not avail': function () {
			var obj = {which: 2};
			var fn = o.dom.event.get_key;
			var result = fn(obj).key;
			Assert.areSame(result,2);
		}
	}
];
