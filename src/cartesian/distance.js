//= require <cartesian/reference>
//= require <math/sqrt>
//= require <math/pow>
$$_cartesian_distance = $$_cartesian.distance = function (x1,y1,x2,y2) {
	return $$_sqrt(
		$$_pow(
			x2 - x1
		,2) +
		$$_pow(
			y2 - y1
		,2)
	);
};
