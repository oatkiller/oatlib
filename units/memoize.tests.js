tests.memoize = [
	{
		name: 'newo.memoize',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test new o.memoize basic usage': function () {
			var total = 0,
			getDouble = o.memoize(function (value) {
				total += 1;
				return value * 2;
			});

			getDouble(1);
			getDouble(1);
			getDouble(1);
			Assert.areSame(1,total);
			getDouble(2);
			getDouble(3);
			getDouble(4);
			Assert.areSame(4,total);
		},
		'test new o.memoize, with invalidateKey': function () {
			var total = 0,
			memo = {},
			getDouble = o.memoize(function (value) {
				total += 1;
				return value * 2;
			},memo);

			getDouble(1);
			getDouble(1);
			getDouble(1);
			Assert.areSame(1,total);
			delete memo[1];
			getDouble(1);
			Assert.areSame(2,total);

		},
		'test new o.memoize, with multiple parameter': function () {
			var total = 0,
			add = o.memoize(function (value1,value2) {
				total += 1;
				return value1 + value2;
			});

			add(1,2);
			add(1,3);
			add(1,4);
			Assert.areSame(3,total);
			add(1,2);
			add(1,3);
			add(1,4);
			Assert.areSame(3,total);
		},
		'test new o.memoize with object param which has a toString method': function () {
			var total = 0,
			process = o.memoize(function (anObject) {
				total += 1;
				return;
			});

			var AnObject = function (name) {
				this.name = name;
			};
			AnObject.prototype.toString = function () {
				return this.name;
			};

			process(new AnObject('flanbart'));
			process(new AnObject('flanbart'));
			process(new AnObject('flanbart'));
			Assert.areSame(1,total);
			process(new AnObject('olberg'));
			process(new AnObject('tresdleton'));
			process(new AnObject('cranble'));
			Assert.areSame(4,total);
		}
	}
];
