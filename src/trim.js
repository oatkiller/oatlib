$$_trim = oatlib[$trim] = function (s) {
	return s[$replace](/^\s+|\s+$/g,emptyString);
}; 
