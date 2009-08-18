test({
	name: 'contains',
	'works': function () {
		Assert.isTrue([1,2,3][o.contains](1),'contains 1');
		Assert.isFalse([1,2,3][o.contains](0),'doesnt contain 0');
		Assert.isTrue(['a','b'][o.contains]('a','b'),'contains a and b');
	},
	'documentation': function () {
		Assert.isTrue([1,2,3][o.contains](1)); // true. the array [1,2,3] has 1 as an element
		Assert.isFalse([1,2,3,4][o.contains](0)); // false, 0 isnt one of the elements of the array
		Assert.isTrue([1,2,3,4][o.contains](1,2)); // true. contains can take multiple params
		Assert.isFalse([1,2,3,4][o.contains](0,1)); // false. all params must be elements
		Assert.isFalse(['1',2,3][o.contains](1)); // false. i always use === to compare.
	}
});
