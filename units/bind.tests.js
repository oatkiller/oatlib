test({
	name: 'bind',
	setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
	'works': function () {
		var myObj = {name: 'robert'},
		a = 'a',
		b = 'b',
		getName = function (a,b) {return this.name + a + b;};
		Assert.areSame(myObj.name + a + b,getName[o.bind](myObj,a)(b),'bind failed');
	},
	'documentation': function () {
		// an object with a 'name' property
		var person1 = {
			name: 'Robert'
		};

		// another object with a 'name' property
		var person2 = {
			name: 'Roy'
		};

		// a function that returns the name of the object it belongs to. 
		// only it doesnt belong to an object!
		var get_name = function () {
			return this.name;
		};

		// with bind, a function acts like its on an object, even tho its not
		var get_person1s_name = get_name[o.bind](person1),
		get_person2s_name = get_name[o.bind](person2);

		Assert.areSame('Robert',get_person1s_name()); // returns 'Robert'
		Assert.areSame('Roy',get_person2s_name()); // returns 'Roy'
	}
});
