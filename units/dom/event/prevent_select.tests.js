test({
	name: 'prevent_select',
	// its probably possible to actually test this. but i dont want to get into text ranges atm ughhhh
	'runs': function () {
		o.dom.event.prevent_select(function () {return true;});
	}
});
