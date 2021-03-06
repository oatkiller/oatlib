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
	},
	'multisubscribe works': function () {
		var a = 0, b = a, c = a;
		this.event.multi_subscribe({
			a: function (data) {a+=data.value;},
			b: function (data) {b+=data.value;},
			c: function (data) {c+=data.value;}
		});
		Assert.areSame(0,a);
		Assert.areSame(0,b);
		Assert.areSame(0,c);
		this.event.fire({
			type: 'a',
			value: 1
		});
		Assert.areSame(1,a);
		Assert.areSame(0,b);
		Assert.areSame(0,c);
		this.event.fire({
			type: 'a',
			value: 9
		});
		Assert.areSame(10,a);
		Assert.areSame(0,b);
		Assert.areSame(0,c);
		this.event.fire({
			type: 'b',
			value: 3
		});
		Assert.areSame(10,a);
		Assert.areSame(3,b);
		Assert.areSame(0,c);
		this.event.fire({
			type: 'c',
			value: 6
		});
		Assert.areSame(10,a);
		Assert.areSame(3,b);
		Assert.areSame(6,c);
	},
	'documentation': function () {
		(function () {
			var my_event = o.application_event();
			my_event.subscribe(function (payload) {
				//alert(payload.data);
				// do something with the payload
			});

			my_event.fire({
				data: 'will be avail. in the function you subscribed'
			});
		})();
		(function () {
			var my_event = o.application_event();
			my_event.multi_subscribe({
				start: function (payload) {
					// do something when it starts
					//alert(payload.data);
				},
				finish: function (payload) {
					// do something when it finishes
					//alert(payload.data);
				}
			});
			my_event.fire({
				type: 'start',
				data: 'this obj will be passed to the fn you subscribed to start'
			});
			my_event.fire({
				type: 'finish',
				data: 'this obj will be passed to the fn you subscribed to finish'
			});
		})();
	}
});
