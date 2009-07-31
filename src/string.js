//= require <join>
o.string = function () {
	return o.join.call(arguments,empty_string);
};
