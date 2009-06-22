//= require <each>
$$_store(function (obj,namespaceArray) {
	var finalObj = obj;
	namespaceArray[o[$each]](function (namespace) {
		finalObj = obj[namespace] || (obj[namespace] = {});
	});
	return finalObj;
},$namespace);
