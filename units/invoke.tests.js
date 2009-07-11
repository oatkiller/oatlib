tests.invoke = [
	{
		name: 'invoke',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test invoke': function () {
			var count = 0,
			fn = function () {
				count++;
			};
			Assert.areSame(count,0);
			o.invoke(fn);
			Assert.areSame(count,1);
			o.invoke(fn);
			Assert.areSame(count,2);

		}
	}
];

