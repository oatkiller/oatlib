test({
	name: 'rcurry',
	'rcurry': function () {

		var join = function () {
			return Array.prototype.join.call(arguments,' ');
		};

		Assert.areSame('.net sucks',join('.net','sucks'),'join failed');

		var sucks = join[o.rcurry]('sucks'),
		dotnetsucks = sucks('.net');

		Assert.areSame('.net sucks',dotnetsucks,'rcurry failed');
	}
});
