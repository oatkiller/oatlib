test({
	name: 'each',
	'works with arrays': function () {
		var other_one = [];
		[1,2,3,4][o.each](function (item) {
			other_one.push(item);
			Assert.areSame(this.length,this[this.length - 1]);
		});
		Assert.isTrue(other_one.length === 4);
	},
	'works with other objs': function () {
		var src = {
			a: 1,
			b: 2,
			c: 3
		};

		o.each(src,function (value,key) {
			src[key] = value * 2;
		});

		Assert.areSame(2,src.a);
		Assert.areSame(4,src.b);
		Assert.areSame(6,src.c);


	}
});
