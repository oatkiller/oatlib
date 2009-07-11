tests.get_object_property = [
	{
		name: 'get_object_property',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test get_object_property': function () {
			var obj = {
				name: 'robert'
			};
			Assert.areSame(o.get_object_property(obj,'name'),obj.name);
		}
	}
];

