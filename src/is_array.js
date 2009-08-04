(function () {
	var qname = o.qname('im_an_array');
	Array.prototype[qname] = true;
	o.is_array = function (obj) {
		return obj[qname] === true;
	};
})();
