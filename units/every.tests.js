test({
	name: 'every',
	'works for arrays': function () {
		var answer = [1,true,'yes',undefined][o.every](function (a) {return a;});
		Assert.isFalse(answer);
		answer = [1,true,'yes',2][o.every](function (a) {return a;});
		Assert.isTrue(answer);
	}
});
