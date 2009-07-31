test({
	name: 'each',
	'each': function () {
		var other_one = [];
		[1,2,3,4][o.each](function (item) {
			other_one.push(item);
			Assert.areSame(this.length,this[this.length - 1]);
		});
		Assert.isTrue(other_one.length === 4);
	}
});
