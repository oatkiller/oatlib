$$_store(function (propertyName,prefix,element,type,fn,bubble) {
	return element[propertyName](prefix + type,fn,bubble);
},$base_event_modifier);

