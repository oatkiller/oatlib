test({
	name: 'application_event',
	setUp: function () {
		this.event = o.application_event();
	},
	tearDown: function () {
		delete this.event;
	},
	'returns obj': function () {
		Assert.isObject(this.event);
	},
	'subscribe returns fn': function () {
		Assert.isFunction(this.event.subscribe(function () {}));
	},
	'subscribe puts its payload in the event return obj bees property': function () {
		var my_fn = function () {};
		this.event.subscribe(my_fn);
		Assert.areSame(this.event.bees[0],my_fn);
	},
	'subscribes return removes the payload from the event return obj bees property': function () {
		var my_fn = function () {};
		var remove = this.event.subscribe(my_fn);
		remove();
		Assert.areSame(this.event.bees.length,0);
	},
	'fire calls all the bees with its payload': function () {
		var called = false,
		other_called = false,
		my_fn = function (e) {
			called = e;
		},
		my_second_fn = function (e) {
			other_called = e;
		};
		this.event.subscribe(my_fn);
		this.event.subscribe(my_second_fn);
		this.event.fire('nubs');
		Assert.areSame(called,other_called);
		Assert.areSame(called,'nubs');
	}
});
