test({
	name: 'get_mouse_coordinates',
	'should return pageX and pageY if they are on the e': function () {
		var e = {
			pageX: 3,
			pageY: 2,
			clientX: 9,
			clientY: 10
		},
		result = o.dom.event.get_mouse_coordinates(e);
		Assert.areSame(result.x,3);
		Assert.areSame(result.y,2);
	},
	'otherwise should return clientX to document.body.scrollLeft + document.documentElement.scrollLeft, etc': function () {
		var my_document = {
			body: {
				scrollLeft: 18,
				scrollTop: 49
			},
			documentElement: {
				scrollLeft: 21,
				scrollTop: 91
			}
		},
		e = {
			clientX: 13,
		 	clientY: 8
		};
		o.dom.event.setup_get_mouse_coordinates(my_document);
		var result = o.dom.event.get_mouse_coordinates(e);
		Assert.areSame(my_document.body.scrollLeft + my_document.documentElement.scrollLeft + e.clientX,result.x);
		Assert.areSame(my_document.body.scrollTop + my_document.documentElement.scrollTop + e.clientY,result.y);
	}
});
