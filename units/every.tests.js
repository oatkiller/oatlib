test({
	name: 'every',
	'works for arrays': function () {
		var answer = [1,true,'yes',undefined][o.every](function (a) {return a;});
		Assert.isFalse(answer);
		answer = [1,true,'yes',2][o.every](function (a) {return a;});
		Assert.isTrue(answer);
	},
	'works for other objects': function () {
		var count = 0,
		fn = function (a) {count++; return a === true;},
		answer = o.every({
			a: true,
			b: true,
			c: true
		},fn);
		Assert.isTrue(answer);
		Assert.areSame(3,count);
		count = 0;
		answer = o.every({
			a: true,
			b: false,
			c: false
		},fn);
		Assert.isFalse(answer);
		Assert.areSame(2,count);
	}
});
