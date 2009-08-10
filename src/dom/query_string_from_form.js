//= require <dom/reference>
//= require <dom/query_string_obj_from_form>
//= require <remote/query_string_from_obj>
o.dom.query_string_from_form = function (form_node) {
	return o.remote.query_string_from_obj(o.dom.query_string_obj_from_form(form_node));
};
