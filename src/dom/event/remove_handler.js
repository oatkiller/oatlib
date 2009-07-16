//= require <dom/event/reference>
//= require <dom/event/register>
//= require <curry>
// this does the actual dom level remove
$$_dom_event_remove_handler = $$_dom_event.remove_handler = $$_dom_event_register[$$_o$curry](false);
