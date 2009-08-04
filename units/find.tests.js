test({
	name: 'find',
	'works for arrays': function () {
		var answer = [
			{id: 1, value: false},
			{id: 2, value: false},
			{id: 3, value: true},
			{id: 4, value: false}
		][o.find](function (obj) {return obj.value;});
		Assert.areSame(answer.id,3);
	},
	'works for non arrays too': function () {
		var answer = o.find({
			a: false,
			b: false,
			c: 'kittens',
			d: false
		},function (obj,key) {return obj === 'kittens';});
		Assert.areSame('kittens',answer);
	}
});
