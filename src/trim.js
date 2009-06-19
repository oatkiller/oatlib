o[$trim] = function () {
	var that = this();
	return that[$replace](/^\s+|\s+$/g,emptyString);
}; 
