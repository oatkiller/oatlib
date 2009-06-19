tests.combine = [
	{
		name: 'combine',
		'test combine': function () {
			oatlib(function (o) {
				var newObj = o.combine({
					name: 'robert'
				},{
					profession: 'website person'
				});

				Assert.isTrue(newObj.hasOwnProperty('name') && newObj.hasOwnProperty('profession'),'combine sucks');
			});
		}
	}
];
