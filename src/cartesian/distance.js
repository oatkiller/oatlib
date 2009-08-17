//= require <cartesian/reference>
o.cartesian.distance = function (x1,y1,x2,y2) {
	var x_difference = x2 - x1,
			y_difference = y2 - y1;
	return Math.sqrt(x_difference * x_difference + y_difference * y_difference);
};
