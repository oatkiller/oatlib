tests.each = [
	{
		name: 'each',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test each': function () {
			var otherOne = [];
			[1,2,3,4][o('each')](function (item) {
				otherOne.push(item);
			});
			Assert.isTrue(otherOne.length === 4);
		}
	}
];

