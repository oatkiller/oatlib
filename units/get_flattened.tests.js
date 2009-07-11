tests.get_flattened = [
	{
		name: 'get_flattened',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test getFlattened': function () {
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
		'test getFlattened in take form': function () {
			var source = [1,2,[3,4],[5],6],
			result = o.get_flattened(source),
			expected_result = [1,2,3,4,5,6] 
			i = 0,
			length = expected_result.length;
			Assert.areSame(result.length,expected_result.length);
			for (; i < length; i++) {
				Assert.areSame(result[i],expected_result[i]);
			}
		}
	}
];

