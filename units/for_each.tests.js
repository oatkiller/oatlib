tests.for_each = [
	{
		name: 'for_each',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test for_each': function () {
			var obj = {
				a: 1,
				b: 2,
				c: 3
			};
			o.for_each(obj,function (property,property_name,obj) {
				obj[property_name] = property + 1;
			});
			Assert.areSame(obj.a,2);
			Assert.areSame(obj.b,3);
			Assert.areSame(obj.c,4);
		}
	}
];

