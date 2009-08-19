test({
	name: 'get_flattened',
	'works for arrays': function () {
		var source = [1,2,[3,4],[5],6],
		result = source[o.get_flattened](),
		expected_result = [1,2,3,4,5,6] 
		i = 0,
		length = expected_result.length;
		Assert.areSame(result.length,expected_result.length);
		for (; i < length; i++) {
			Assert.areSame(result[i],expected_result[i]);
		}
	},
	'getFlattened in take form': function () {
		var source = [1,2,[3,4],[5],6],
		result = o.get_flattened(source),
		expected_result = [1,2,3,4,5,6] 
		i = 0,
		length = expected_result.length;
		Assert.areSame(result.length,expected_result.length);
		for (; i < length; i++) {
			Assert.areSame(result[i],expected_result[i]);
		}
	},
	'documentation': function () {
Assert.areSame(6,[1,2,[3,4],[5,6]][o.get_flattened]().length);
[1,2,[3,4],[5,6]][o.get_flattened]();
	}
});
