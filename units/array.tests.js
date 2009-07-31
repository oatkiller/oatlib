test({
	name: 'array',
	setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
	'works': function () {
		var ra = o.array({length: 3, '0': 'a', '1': 'b', '2': 'c'});
		Assert.isNotUndefined(ra.push);
		Assert.areSame(ra[0],'a');
		Assert.areSame(ra[1],'b');
		Assert.areSame(ra[2],'c');
		Assert.areSame(ra.length,3);
	}
});
