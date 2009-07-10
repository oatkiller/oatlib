//= require <dom/reference>
(function () {

 	var fn = function (node) {
		return (fn = $$_dom_get_text_content = $$_dom[$get_text_content] =  $innerText in node ? function (node) {
			return node[$innerText];
		} : function (node) {
			return node[$textContent];
		})[$apply](this,arguments);
	};

	$$_dom_get_text_content = $$_dom[$get_text_content] = function () {
		return fn[$apply](this,arguments);
	};

})();
