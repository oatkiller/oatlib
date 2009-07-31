//= require <dom/reference>
o.dom.insert_before = function (target,payload) {
	return target.parentNode.insertBefore(payload,target);
};
