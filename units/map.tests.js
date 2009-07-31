test({
	name: 'map',
	'map': function () {
		var original = [2,4,6],
		mapped = original[o.map](function (e) {
				return e * 2;
		});

		for (var i = 0, length = original.length; i < length; i++) {
			Assert.areSame(original[i] * 2,mapped[i]);
		}
	}
});
