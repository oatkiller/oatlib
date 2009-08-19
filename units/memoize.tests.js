test({
	name: 'newo.memoize',
	'new o.memoize basic usage': function () {
		var total = 0,
		get_double = o.memoize(function (value) {
			total += 1;
			return value * 2;
		});

		get_double(1);
		get_double(1);
		get_double(1);
		Assert.areSame(1,total);
		get_double(2);
		get_double(3);
		get_double(4);
		Assert.areSame(4,total);
	},
	'new o.memoize, with invalidate': function () {
		var total = 0,
		memo = {},
		get_double = function (value) {
			total += 1;
			return value * 2;
		}[o.memoize](memo);

		get_double(1);
		get_double(1);
		get_double(1);
		Assert.areSame(1,total);
		delete memo['1'];
		get_double(1);
		Assert.areSame(2,total);

	},
	'new o.memoize, with multiple parameter': function () {
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
	'new o.memoize with object param which has a toString method': function () {
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
	},
	'documentation': function () {

// fake vars
var my_data;

// test vars
var count = 0;

// this will cache the returns from the fn in my_cached_ajax_responses

var my_cached_ajax_responses = {},
get_data_by_id_and_type = function (id,type) {
	count++;
	// do an ajax call
	return my_data; // something you got from ajax
}[o.memoize](my_cached_ajax_responses);

Assert.areSame(0,count);

// does the ajax call
get_data_by_id_and_type(1,'name'); 
Assert.areSame(1,count);

// no ajax call, you get the cached version
get_data_by_id_and_type(1,'name');
Assert.areSame(1,count);

// the cached version is stored at the join of the arguments
var key = [1,'name'].join(); // '1,name'

// delete the cached version
delete my_cached_ajax_responses[key];

// the ajax call happens again
get_data_by_id_and_type(1,'name');
Assert.areSame(2,count);

	}
});
