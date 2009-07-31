//= require <dom/event/reference>
//= require <dom/event/add_handler>
//= require <dom/event/remove_handler>
//= require <each>
o.dom.event.events_to_remove = [];
o.dom.event.add_handler(window,'unload',function () {
	o.dom.event.events_to_remove[o.each](function (args) {
		args.length && o.dom.event.remove_handler.apply(null,args);
	});
});
