// mask one object with another
o[$mask] = function (obj) {
	var C = function () {};
	C[$prototype] = obj;
	return new C();
};
