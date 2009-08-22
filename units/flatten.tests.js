test({
	name: 'flatten',
	'works for arrays': function () {
		var source = [1,2,[3,4],[5],6],
		result = source[o.flatten](),
		expected_result = [1,2,3,4,5,6] 
		i = 0,
		length = expected_result.length;
		Assert.areSame(result.length,expected_result.length);
		for (; i < length; i++) {
			Assert.areSame(result[i],expected_result[i]);
		}
	},
	'flatten in take form': function () {
		var source = [1,2,[3,4],[5],6],
		result = o.flatten(source),
		expected_result = [1,2,3,4,5,6] 
		i = 0,
		length = expected_result.length;
		Assert.areSame(result.length,expected_result.length);
		for (; i < length; i++) {
			Assert.areSame(result[i],expected_result[i]);
		}
	},
	'documentation': function () {
Assert.areSame(6,[1,2,[3,4],[5,6]][o.flatten]().length);
[1,2,[3,4],[5,6]][o.flatten]();
	}
});
