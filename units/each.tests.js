test({
	name: 'each',
	'take form works on arrays': function () {
		var count = 0,
		my_array = [1,2,3];
		o.each(my_array,function (element,index,ra) {
			Assert.areSame(count,parseInt(index));
			Assert.areSame(my_array[count],element);
			Assert.areSame(my_array,ra);
			count++;
		});
		Assert.areSame(3,count);
	},
	'prototype form works on arrays': function () {
		var count = 0,
		my_array = [1,2,3];
		my_array[o.each](function (element,index,ra) {
			Assert.areSame(count,index);
			Assert.areSame(my_array[count],element);
			Assert.areSame(my_array,ra);
			count++;
		});
		Assert.areSame(3,count);
	},
	'undefineds in array are eachd over': function () {
		var count = 0;
		o.each([undefined,undefined,undefined],function () {
			count++;
		});
		Assert.areSame(3,count);
		count = 0;
		[undefined,undefined,undefined][o.each](function () {
			count++;
		});
		Assert.areSame(3,count);
	},
	'take form works on objects': function () {
		var count = 0,
		my_obj = {a: 1, b: 2, c: 3},
		properties = ['a','b','c'];
		o.each(my_obj,function (element,property_name,obj) {
			Assert.areSame(properties[count],property_name);
			Assert.areSame(obj[property_name],element);
			Assert.areSame(my_obj,obj);
			count++;
		});
		Assert.areSame(3,count);
	},
	'take form can break': function () {
		var count = 0;
		o.each({a: true, b: false},function (element) {
			if (element === false) {
				return o.each_break;
			}
			count++;
		});
		Assert.areSame(1,count);
	},
	'array form can break': function () {
		var count = 0;
		o.each([true,false],function (element) {
			if (element === false) {
				return o.each_break;
			}
			count++;
		});
		Assert.areSame(1,count);
	}
});

