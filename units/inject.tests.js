tests.inject = [
	{
		name: 'inject',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test inject': function (){
			Assert.areSame([2,2,2][o.inject](1,function (memo,a) {return memo * a;}),8);
		}
	}
];
