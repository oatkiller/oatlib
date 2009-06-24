$$_store(function (o) {
	return this[$replace](/{([^{}]*)}/g,
		function (a,b) {
			var r = o[b];
			return typeof r === $string || typeof r === $number ? r : a;
		}
	);
},$supplant,emptyArray,$$String[$prototype]);
