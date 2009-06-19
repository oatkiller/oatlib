$$_supplant = oatlib[$supplant] = function (s,o) {
	return s[$replace](/{([^{}]*)}/g,
		function (a,b) {
			var r = o[b];
			return typeof r === $string || typeof r === $number ? r : a;
		}
	);
};
