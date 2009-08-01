//= require <dom/event/reference>
// im pretty sure this is not working right.. also its confusing
o.dom.event.get_key = function (e) {

	var result = {};
	result.character = String.fromCharCode(result.key = e.keyCode || e.which);
	return result;

};
