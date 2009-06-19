tests.rcurry = [
	{
		name: 'rcurry',
		'test curry': function () {
			oatlib(function (o) {
				var join = function () {
					return Array.prototype.join.call(arguments,' ');
				};
				var sucks = o.rcurry(join,'sucks');
				dotnetsucks = sucks('.net');
				Assert.areSame('.net sucks',dotnetsucks);
			});
		}
	}
];
