//= require <each>
//= require <take>
//= require <language/prototypes/array>
$$_inject = $$_store(o,$inject,$$_take($$_store($$_language_prototypes_array,$inject,function (memo,iterator) {
	this[o[$each]](function (property) {
		memo = iterator[$call](this,memo,property);
	});
	return memo;
},$$true)));
(function () {
	var $$_qname_inject = $$_qname($inject);
	$$_inject[$toString] = function () {return $$_qname_inject;};
})();
