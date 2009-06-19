// mask one object with another
$$_mask = oatlib[$mask] = function (obj) {
	var C = function () {};
	C[$prototype] = obj;
	return new C();
};
