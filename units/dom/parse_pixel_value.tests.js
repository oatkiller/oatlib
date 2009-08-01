test({
	name: 'parse_pixel_value',
	_should: {
		error: {
			'doesnt work': true
		}
	},
	'works': function () {
		Assert.areSame(12,o.dom.parse_pixel_value('12px'));
	},
	'doesnt work': function () {
		o.dom.parse_pixel_value('12');
	}
});
