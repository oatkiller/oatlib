tests.each = [
	{
		name: 'every',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test every': function () {
			var answer = [
				{id: 1, value: false},
				{id: 2, value: false},
				{id: 3, value: true},
				{id: 4, value: false}
			][o.find](function (obj) {return obj.value;});
			Assert.areSame(answer.id,3);
		}
	}
];