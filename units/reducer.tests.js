test({
	name: 'reducer',
	'reducer': function () {
		var stringBuilder = o.reducer(function () {return '';},function (a,b) {
			return a + b;
		});
		Assert.areSame('abc',stringBuilder('a','b','c'),'reducer sucks');
		var musher = o.reducer(function () {return {length: 0};},function (arrayLike,value) {
			arrayLike[arrayLike.length] = value;
			arrayLike.length += 1;
			return arrayLike;
		});
		var arrayLike = musher(0,1,2);
		Assert.areSame(3,arrayLike.length,'length','reducer sucks');
		Assert.areSame(0,arrayLike[0],'reducer sucks');
		Assert.areSame(1,arrayLike[1],'reducer sucks');
		Assert.areSame(2,arrayLike[2],'reducer sucks');
	}
});
