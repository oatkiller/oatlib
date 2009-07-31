test({
	name: 'inject',
	'inject': function (){
		Assert.areSame([2,2,2][o.inject](1,function (memo,a) {return memo * a;}),8);
		Assert.areSame(o.inject([2,2,2],1,function (memo,a) {return memo * a;}),8);
	}
});
