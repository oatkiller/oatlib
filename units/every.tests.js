test({
	name: 'every',
	'works for arrays': function () {
		answer = [1,true,'yes',2][o.every](function (a) {return a;});
		Assert.isTrue(answer);
	},
	'works for arrays with undefined in them': function () {
		var answer = [1,true,'yes',false][o.every](function (a) {return a;});
		Assert.isFalse(answer);
	}
});
