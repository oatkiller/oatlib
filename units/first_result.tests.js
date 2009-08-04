test({
	name: 'first_result',
	'works for arrays': function () {
		var answer = [
			{id: 1, value: true},
			{id: 2, value: true},
			{id: 3, value: false},
			{id: 4, value: false}
		][o.first_result](function (obj) {return !obj.value;});
		Assert.areSame(answer,true);
	},
	'works for non arrays': function () {
		var answer = o.first_result({
			a: 1,
			b: 2,
			c: 3,
			d: 4
		},function (value) {var result = value * 2; return result > 5 ? result : false;});
		Assert.areSame(6,answer);
	}
});

