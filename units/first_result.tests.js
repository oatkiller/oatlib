test({
	name: 'first_result',
	'works': function () {
		var answer = [
			{id: 1, value: true},
			{id: 2, value: true},
			{id: 3, value: false},
			{id: 4, value: false}
		][o.first_result](function (obj) {return !obj.value;});
		Assert.areSame(answer,true);
	}
});

