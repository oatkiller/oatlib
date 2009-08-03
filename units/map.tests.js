test({
	name: 'map',
	'works with arrays': function () {
		var original = [2,4,6],
		mapped = original[o.map](function (e) {
				return e * 2;
		});

		for (var i = 0, length = original.length; i < length; i++) {
			Assert.areSame(original[i] * 2,mapped[i]);
		}
	},
	'works with other objs': function () {
		
		var src = {
			a: 1,
			b: 2,
			c: 3
		},
		result = o.map(src,function (value) {
			return value * 2;
		});

		Assert.areSame(src.a * 2,result.a);
		Assert.areSame(src.b * 2,result.b);
		Assert.areSame(src.c * 2,result.c);
	}
});
