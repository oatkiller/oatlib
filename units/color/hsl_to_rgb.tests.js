test({
	name: 'rgb_to_hsl',
	'asdf': function () {
		var rgb = [56,60,0],
		expected_hsl = {h: 64, s: 100, l: 26},
		hsl = o.color.rgb_to_hsl.apply(null,rgb);
		Assert.areSame(hsl.h,expected_hsl.h);
		Assert.areSame(hsl.s,expected_hsl.s);
		Assert.areSame(hsl.l,expected_hsl.l);
	}
});
