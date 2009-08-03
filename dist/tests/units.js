test({
	name: 'core',
	'core': function () {
		Assert.areEqual('http://oatlab.com/oatlib/v2',o);
	},
	'qname': function () {
		var sample_name = 'butt';
		Assert.areSame(o+':::'+sample_name,o.qname(sample_name));
	},
});
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
