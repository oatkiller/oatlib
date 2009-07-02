tests.get_mouse_coordinates_pressed = [
	{
		name: 'get_mouse_coordinates',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
		},
		'test get_mouse_coordinates should return pageX and pageY if they are on the e': function () {
			var e = {
				pageX: 3,
			 	pageY: 2,
			 	clientX: 9,
			 	clientY: 10
			},
			result = o.dom.event.get_mouse_coordinates(e);
			Assert.areSame(result.x,3);
			Assert.areSame(result.y,2);
		}
	}
];
