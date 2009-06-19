tests.constructor = [
	{
		name: 'constructor',
		'test constructor': function () {
			oatlib(function (o) {
				var C = o.constructor({
					destroy: function () {
						return 'nope';
					}
				});
				var me = new C({
					'name': 'robert',
					'profession': 'website person'
				});
				Assert.isTrue(me.hasOwnProperty('name'),'property object worked');
				Assert.isTrue(me.hasOwnProperty('profession'),'property object worked');
				Assert.isTrue(!me.hasOwnProperty('destroy') && me.destroy !== null,'prototype worked');
			});
		}
	}
];
