//= require <dom/event/reference>
//= require <dom/event/schedule_for_remove>
//= require <dom/event/remove_handler>
//= require <dom/event/get_abstraction>
//= require <splice>
//= require <bind>
o.dom.event.add_listener = function (node,type,fn,bubble) {
	var wrapped_fn = function (e) {
		return fn.call(this,e,o.dom.event.get_abstraction(e));
	},
	args = [node,type,wrapped_fn,bubble];
	o.dom.event.add_handler.apply(this,args);
	// register event for removal at page unload
	o.dom.event.events_to_remove.push(args);
	return function () {
		// remove the args from the array of args scheduled from remove. 
		// then remove them args :)
		return o.dom.event.remove_handler.apply(this,args);
	};
};
