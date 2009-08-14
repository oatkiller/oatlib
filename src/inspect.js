//= require <string>
//= require <array>
//= require <each>
//= require <type_of>
//= require <indexOf>

(function () {

 	var object_prototype_to_string = Object.prototype.toString,
	to_strings = {
		'number': function (n) {
			return n.toString(10);
		},
		'string': function (n) {
			return o.string('"',n,'"');
		},
		'object': function (n,tab_count,processed_objs) {
			if (n instanceof RegExp) {
				var s = ['/',n.source,'/'];
				n.ignoreCase && s.push('i');
				n.multiline && s.push('m');
				n.global && s.push('g');
				return s.join('');
			}
			if (n.toString !== object_prototype_to_string) {
				return n.toString();
			}
			var tab_string = (new Array((tab_count || 1) + 1)).join('\t'),
			object_graph = [];
			o.each(n,function (value,key) {
				object_graph.push(o.string(key,': ',o.inspect(value,tab_count++,processed_objs)));
			});
			return o.string('{\n\t',object_graph.join(',\n\t'),'\n}');
		},
		'boolean': function (n) {
			return n.toString();
		},
		'function': function (n) {
			return 'Function: ' + (n.name === undefined || n.name.length === 0 ? 'anonymous' : n.name);
		},
		'default': function (n) {
			return n.toString();
		}
	};

	o.inspect = function (n,tab_count,processed_objs) {
		if (processed_objs) {
			if (o.indexOf(processed_objs,n) !== -1) {
				return 'circular reference: ' + n.toString();
			} else {
				processed_objs.push(n);
			}
		} else {
			processed_objs = [];
		}
		var my_type = o.type_of(n);
		return (to_strings[my_type] || to_strings['default']).apply(this,arguments);
	};

})();
