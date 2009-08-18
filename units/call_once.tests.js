test({
	name: 'call_once',
	'call_once calls': function () {
		var count = 0,
		do_count = o.call_once(function () {
			count++;
		});
		do_count();
		Assert.areSame(1,count,'didnt call');
		do_count();
		Assert.areSame(1,count,'called too many times'); 
	},
	'documentation': function () {

		var get_a_div = function () {
			return document.createElement('div');
		}[o.call_once]();

		var my_div = get_a_div(), // returns a new div
		my_same_div = get_a_div(); // returns the same div again, as the function is called only once

		Assert.areSame(my_div,my_same_div);
		//my_div === my_same_div; // true. 

	}
});
