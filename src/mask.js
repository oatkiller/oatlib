// mask one object with another
$$_store(function (obj) {
	var C = function () {};
	C[$prototype] = obj;
	return new C();
},$mask);
