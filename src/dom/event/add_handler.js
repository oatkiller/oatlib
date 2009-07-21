//= require <dom/event/reference>
//= require <dom/event/register>
//= require <curry>
// this does the actual dom level add
$$_dom_event_add_handler = $$_dom_event.add_handler = $$_dom_event_register[o.curry](true);
