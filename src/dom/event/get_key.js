//= require <dom/event/reference>
$$_store($$_dom_event,$get_key,function (e) {

	var result = {};
	result[$character] = $$String[$fromCharCode](result[$key] = e[$keyCode] || e[$which]);
	return result;

});
