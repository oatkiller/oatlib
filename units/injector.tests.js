tests.functional = [
	{
		name: 'injector',
		'test injector': function () {
			oatlib(function (o) {
				var stringBuilder = o.injector(function () {return '';},function (a,b) {
					return a + b;
				});
				Assert.areSame('abc',stringBuilder('a','b','c'),'injector sucks');
				var musher = o.injector(function () {return {length: 0};},function (arrayLike,value) {
					arrayLike[arrayLike.length] = value;
					arrayLike.length += 1;
					return arrayLike;
				});
				var arrayLike = musher(0,1,2);
				Assert.areSame(3,arrayLike.length,'length','injector sucks');
				Assert.areSame(0,arrayLike[0],'injector sucks');
				Assert.areSame(1,arrayLike[1],'injector sucks');
				Assert.areSame(2,arrayLike[2],'injector sucks');
			});
		}
	}
];
