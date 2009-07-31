//= require <dom/event/reference>
//= require <dom/event/register>
//= require <curry>
// this does the actual dom level add
o.dom.event.add_handler = o.dom.event.register[o.curry](true);
