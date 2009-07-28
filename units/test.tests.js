tests.test = [
	{
		name: 'test',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test recursion sucks 5000': function () {
			Assert.areSame(o.test(5000),0);
		},
		'test recursion sucks 3750': function () {
			Assert.areSame(o.test(3750),0);
		},
		'test recursion sucks 3500': function () {
			Assert.areSame(o.test(3500),0);
		},
		'test recursion sucks 3000': function () {
			Assert.areSame(o.test(3000),0);
		},
		'test recursion sucks 2800': function () {
			Assert.areSame(o.test(2800),0);
		},
		'test recursion sucks 2500': function () {
			Assert.areSame(o.test(2500),0);
		},
		'test recursion sucks 500': function () {
			Assert.areSame(o.test(500),0);
		},
		'test recursion sucks 400': function () {
			Assert.areSame(o.test(400),0);
		},
		'test recursion sucks 300': function () {
			Assert.areSame(o.test(300),0);
		},
		'test recursion sucks 200': function () {
			Assert.areSame(o.test(200),0);
		},
		'test recursion sucks 100': function () {
			Assert.areSame(o.test(100),0);
		},
		'test recursion sucks 50': function () {
			Assert.areSame(o.test(50),0);
		},
		'test recursion sucks 25': function () {
			Assert.areSame(o.test(25),0);
		},
		'test recursion sucks 2': function () {
			Assert.areSame(o.test(2),0);
		}
	}
];
