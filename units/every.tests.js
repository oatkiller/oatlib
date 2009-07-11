tests.each = [
	{
		name: 'every',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test every': function () {
			var otherOne = [];
			var answer = [1,true,'yes',undefined][o.every](function (a) {return a;});
			Assert.isFalse(answer);
			answer = [1,true,'yes',2][o.every](function (a) {return a;});
			Assert.isTrue(answer);
		}
	}
];
