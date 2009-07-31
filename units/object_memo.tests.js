test({
	name: 'object_memo',
	'object_memo': function () {

		var myC = function () {},
		calcCount = 0;
		myC.prototype = {
			getIt: o.object_memo('myProperty',function () {
				calcCount++;
				return 'value';
			})
		},
		myObj = new myC();

		Assert.isFalse(myObj.hasOwnProperty('myProperty'));
		Assert.isFalse(myObj.hasOwnProperty('getIt'));

		Assert.areSame(myObj.getIt(),'value');
		Assert.areSame(calcCount,1);
		Assert.areSame(myObj.getIt(),'value');
		Assert.areSame(calcCount,1);
		Assert.isTrue(myObj.hasOwnProperty('myProperty'));

	}
});
