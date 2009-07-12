tests.filter = [
	{
		name: 'filter',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test filter': function () {
			var results = [1,2,3,4][o.filter](function (a) {return a % 2;});
			Assert.areSame(results.length,2);
			Assert.areSame(results[0],1);
			Assert.areSame(results[1],3);
		}
	}
];

