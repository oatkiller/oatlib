//= require <dom/reference>
//= require <string>
$$_store($$_dom,$set_opacity,function (node,value) {
	node[$style][$opacity] = value / 10;
	node[$style][$filter] = o[$string]('alpha(opacity=',value * 10,')');
});
