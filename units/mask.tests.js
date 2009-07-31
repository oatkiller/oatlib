test({
	name: 'mask',
	'mask': function () {
		var obj = {
			name: 'woot'
		},
		masked = o.mask(obj);
		Assert.isTrue('name' in masked);
		Assert.isFalse(masked.hasOwnProperty('name'));
		
	}
});
