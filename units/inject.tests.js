tests.inject = [
	{
		name: 'inject',
		setUp: function () {},
		tearDown: function () {},
		testInject: function (){
			oatlib(function (o) {
				console.dir(o);
				Assert.areSame(o.inject(1,function (memo,a) {return memo * a;},2,2,2),8);
			});
		}
	}
];
