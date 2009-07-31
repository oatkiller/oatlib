test({
	name: 'combine',
	'combine': function () {
		var newObj = o.combine({
			name: 'robert'
		},{
			profession: 'website person'
		});

		Assert.isTrue(newObj.hasOwnProperty('name') && newObj.hasOwnProperty('profession'),'combine sucks');
	}
});
