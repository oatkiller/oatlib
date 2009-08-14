test({
	name: 'find_position',
	'works': function () {
		var my_div = document.createElement('div');
		document.body.appendChild(my_div);
		
		var position = o.dom.find_position(my_div);

		Assert.isNotUndefined(position.y);
		Assert.isNotUndefined(position.x);
		Assert.isNotUndefined(position.get_height);
		Assert.isNotUndefined(position.get_width);
		Assert.isNotUndefined(position.rect);

	}
});
