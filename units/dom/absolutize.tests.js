test({
	name: 'absolutize',
	'works': function () {
		var found_position = null;
		o.dom.find_position = function (my_node) {
			found_position = my_node;
			return {
				y: 10,
				x: 20
			};
		};
		node = document.createElement('div');
		node.style.width = '13px';
		node.style.height = '13px';
		var position = o.dom.absolutize(node);
		Assert.areSame(position.y,10);
		Assert.areSame(position.x,20);
		Assert.areSame(node,found_position);
		Assert.areSame(node.style.position,'absolute');
		Assert.areSame(node.parentNode,document.body);
		Assert.areSame(node.style.top,'10px');
		Assert.areSame(node.style.left,'20px');
		// this is a little incomplete. testing dom stuff is hard unless you make your code bend over backwards
	}
});
