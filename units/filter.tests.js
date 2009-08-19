test({
	name: 'filter',
	'works on arrays': function () {
		var results = [1,2,3,4][o.filter](function (a) {return a % 2;});
		Assert.areSame(2,results.length);
		Assert.areSame(1,results[0]);
		Assert.areSame(3,results[1]);
	},
	'works on objs': function () {
		var obj = {
			a: 1,
			b: 2,
			c: 3,
			d: 4
		},
		filtered = o.filter(obj,function (a) {return a % 2 !== 0;}),
		count = 0;
		for (var property_name in filtered) {
			if (count === 0) {
				Assert.areSame('a',property_name);
				Assert.areSame(1,filtered[property_name]);
			} else {
				Assert.areSame('c',property_name);
				Assert.areSame(3,filtered[property_name]);
			}
			count++;
		}
		Assert.areSame(2,count);
		Assert.isUndefined(filtered.length);
	},
	'documentation': function () {

var new_array = [1,2,3,4][o.filter](function (i) {
	return i % 2;
});
Assert.areSame(1,new_array[0]);
Assert.areSame(3,new_array[1]);
// returns a new array [1,3];
	}
});
