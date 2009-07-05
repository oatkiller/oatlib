//= require <dom/reference>
//= require <regex>
//= require <string>
$$_dom[$add_class_name] = function (element,className) {
	element[$className] = element[$className][$replace](o[$regex](o[$string]('^(?!.*',className,'(\\s+|$))')),o[$string](className,' '));
	return element;
};
