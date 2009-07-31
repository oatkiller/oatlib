//= require <dom/reference>
//= require <get_object_property>
//= require <rcurry>
(function () {


 	var fn = function (node) {
		return (fn = o.dom.get_text_content = 'innerText' in node ? o.get_object_property[o.rcurry]('innerText') : o.get_object_property[o.rcurry]('textContent')).apply(this,arguments);
	};

	o.dom.get_text_content = function () {
		return fn.apply(this,arguments);
	};

})();
