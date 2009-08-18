test({
	name: 'each',
	'works with arrays': function () {
		var other_one = [];
		[1,2,3,4][o.each](function (item) {
			other_one.push(item);
			Assert.areSame(this.length,this[this.length - 1]);
		});
		Assert.isTrue(other_one.length === 4);
	},
	'works with other objs': function () {
		var src = {
			a: 1,
			b: 2,
			c: 3
		};

		o.each(src,function (value,key) {
			src[key] = value * 2;
		});

		Assert.areSame(2,src.a);
		Assert.areSame(4,src.b);
		Assert.areSame(6,src.c);
	},
	'can break': function () {
		var count = 0,
		ra = [1,2,3,4];
		var broke = ra[o.each](function (element) {
			count++;
			if (element === 3) {
				return o.each_break;
			}
		});
		Assert.areSame(3,count);
		Assert.areSame(o.each_break,broke);
	}/*,
	'documentation': function () {

		[1,2,3][o.each](function (n,index,my_array) {
			// this will be 1, then 2, then 3. 
			// this is different than a for loop in that 
			// it runs an fn each time, so closure happens

			alert(n); 
		});

		// you can also use it on objects that aren't arrays
		o.each({
			name: 'Robert',
			age: 23,
			food: 'peanut butter'
		},function (element,property_name,obj) {
			alert(property_name + ': ' + element);
		});

		// you can break the loop by returning the special
		// o.each_break object;
		[1,2,3][o.each](function (n) {
			if (n === 2) {
				// the each will stop iterating now
				return o.each_break;
			}
		});

	}*/
});
