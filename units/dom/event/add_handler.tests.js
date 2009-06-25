var isEmpty = function (o) {
	var i, v;
	if (typeOf(o) === 'object') {
		for (i in o) {
			v = o[i];
			if (v !== undefined && typeOf(v) !== 'function') {
				return false;
			}
		}
	}
	return true;
},
typeOf = function (value) {
    var s = typeof value;
    if (s === 'object') {
        if (value) {
            if (value instanceof Array) {
                s = 'array';
            }
        } else {
            s = 'null';
        }
    }
    return s;
};


tests.add_event_handler = [
	{
		name: 'add_event_handler',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
		},
		'test add_event_handler': function () {
			var worked = false,
			button = document.createElement('button');
			o.dom.event.add_handler(button,'click',function (e) {
				worked = true;
			});
			YAHOO.util.UserAction.click(button); 
			Assert.isTrue(worked);
		}
	}
];
