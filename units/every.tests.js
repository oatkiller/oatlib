test({
	name: 'every',
	'works for arrays': function () {
		answer = [1,true,'yes',2][o.every](function (a) {return a;});
		Assert.isTrue(answer);
	},
	'works for arrays with undefined in them': function () {
		var answer = [1,true,'yes',false][o.every](function (a) {return a;});
		Assert.isFalse(answer);
	},
	'documentation': function () {
// 1, 2, and 3 are all less than 4.
Assert.isTrue([1,2,3][o.every](function (n) {return n < 4;})); // true;

// 1, and 2 are less than 4 but 5 isnt...
Assert.isFalse([1,2,5][o.every](function (n) {return n < 4;})); // false;
	}
});
