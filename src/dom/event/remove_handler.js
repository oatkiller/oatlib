//= require <dom/event/reference>
//= require <dom/event/register>
//= require <curry>
// this does the actual dom level remove
o.dom.event.remove_handler = o._om_event_register[o.curry](false);
