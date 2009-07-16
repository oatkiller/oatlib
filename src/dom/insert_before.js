//= require <dom/reference>
$$_dom_insert_before = $$_dom.insert_before = function (target,payload) {
	return target.parentNode.insertBefore(payload,target);
};
