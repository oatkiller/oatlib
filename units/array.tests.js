test({
	name: 'array',
	setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
	'works': function () {
		var ra = o.array({length: 3, '0': 'a', '1': 'b', '2': 'c'});
		Assert.isNotUndefined(ra.push);
		Assert.areSame('a',ra[0]);
		Assert.areSame('b',ra[1]);
		Assert.areSame('c',ra[2]);
		Assert.areSame(3,ra.length);
	},
	'works for arguments': function () {
		var my_fn = function () {
			var ra = o.array(arguments);
			Assert.isTrue(ra instanceof Array);
			Assert.areSame(ra[0],arguments[0]);
			Assert.areSame(ra[1],arguments[1]);
			Assert.areSame(ra[2],arguments[2]);
		};

		my_fn(1,2,3);
	},
	'how does ie handle array elements with a value of undefined?': function () {
		Assert.areSame(1,[undefined].length,'language is broken');
		Assert.areSame(1,o.array([undefined]).length,'slice is broken?');
	}
});
