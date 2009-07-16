//= require <dom/reference>
//= require <get_object_property>
//= require <rcurry>
(function () {


 	var fn = function (node) {
		return (fn = $$_dom_get_text_content = $$_dom.get_text_content =  $innerText in node ? $$_get_object_property[$$_o$rcurry]($innerText) : $$_get_object_property[$$_o$rcurry]($textContent)).apply(this,arguments);
	};

	$$_dom_get_text_content = $$_dom.get_text_content = function () {
		return fn.apply(this,arguments);
	};

})();
