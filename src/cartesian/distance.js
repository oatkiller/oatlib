//= require <cartesian/reference>
o.cartesian.distance = function (p1,p2) {
	var x_difference = p2.x - p1.x, y_difference = p2.y - p1.y;
	return Math.sqrt(x_difference * x_difference + y_difference * y_difference);
};
