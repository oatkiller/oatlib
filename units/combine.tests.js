tests.combine = [
	{
		name: 'combine',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test combine': function () {
			var newObj = o.combine({
				name: 'robert'
			},{
				profession: 'website person'
			});

			Assert.isTrue(newObj.hasOwnProperty('name') && newObj.hasOwnProperty('profession'),'combine sucks');
		}
	}
];
