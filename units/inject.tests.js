tests.inject = [
	{
		name: 'inject',
		'test inject': function (){
			oatlib(function (o) {
				Assert.areSame(o.inject(1,function (memo,a) {return memo * a;},2,2,2),8);
			});
		}
	}
];
