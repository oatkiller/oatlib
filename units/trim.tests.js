test({
	name: 'trim',
	'trim': function () {
		Assert.areSame('123','      123     				'[o.trim]());
	}
});
