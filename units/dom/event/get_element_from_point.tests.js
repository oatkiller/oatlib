test({
	name: 'get_element_from_point',
	'does right one way': function () {
		var payload,
		my_payload = {
			clientX: 1,
			clientY: 3
		};
		o.dom.event.setup_get_element_from_point({
			elementFromPoint: function (x,y) {
				payload = {
					x: x,
					y: y
				};
			}
		});
		o.dom.event.get_element_from_point(my_payload);
		Assert.areSame(payload.x,my_payload.x);
		Assert.areSame(payload.y,my_payload.y);
	},
	'does right one way': function () {
		var payload,
		my_payload = {
			pageX: 1,
			pageY: 3
		};
		o.dom.event.setup_get_element_from_point({
			elementFromPoint: function (x,y) {
				payload = {
					x: x,
					y: y
				};
			}
		});
		o.dom.event.get_element_from_point(my_payload);
		Assert.areSame(payload.x,my_payload.x);
		Assert.areSame(payload.y,my_payload.y);
	}
// i tried to do a functional test here but yui test wasnt exact enough
});
