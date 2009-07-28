//= require <string>
//= require <json/reference>
//= require <hasOwnProperty>
//= require <language/prototypes/date>
//= require <language/prototypes/string>
//= require <language/prototypes/number>
//= require <language/prototypes/boolean>
// this is terrible stuff
(function () {
	var f = function (n) {
		return n < 10 ? '0' + n : n;
	};


	$$_store($$_language_prototypes_date,$toJSON,function (key) {
		return isFinite(this.valueOf()) ?
			this.getUTCFullYear()   + '-' +
			f(this.getUTCMonth() + 1) + '-' +
			f(this.getUTCDate())      + 'T' +
			f(this.getUTCHours())     + ':' +
			f(this.getUTCMinutes())   + ':' +
			f(this.getUTCSeconds())   + 'Z' : null;
	});

	(function () {
		var p = function (key) {
			return this.valueOf();
		};
		$$_store($$_language_prototypes_string,$toJSON,p);
		$$_store($$_language_prototypes_number,$toJSON,p);
		$$_store($$_language_prototypes_boolean,$toJSON,p);
	})();

	var escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
	gap,
	indent,
	meta = {    
		'\b': '\\b',
		'\t': '\\t',
		'\n': '\\n',
		'\f': '\\f',
		'\r': '\\r',
		'"' : '\\"',
		'\\': '\\\\'
	},
	rep;

	var quote = function (string) {
		escapable.lastIndex = 0;
		return escapable.test(string) ?  '"' + string.replace(escapable, function (a) {
			var c = meta[a];
			return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
		}) + '"' :
		'"' + string + '"';
	};

	var str = function (key, holder) {
		var i, k, v, length, mind = gap, partial, value = holder[key];

		if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
			value = value.toJSON(key);
		}

		if (typeof rep === 'function') {
			value = rep.call(holder, key, value);
		}

		switch (typeof value) {
			case 'string': return quote(value);
			case 'number': return isFinite(value) ? String(value) : 'null';
			case 'boolean':
			case 'null': return String(value);
			case 'object': if (!value) {
					return 'null';
				}
				gap += indent;
				partial = [];
				if ($$_language_prototypes_object.prototype.toString.apply(value) === '[object Array]') {
					length = value.length;
					for (i = 0; i < length; i += 1) {
						partial[i] = str(i, value) || 'null';
					}

					v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']';
					gap = mind;
					return v;
				}

				if (rep && typeof rep === 'object') {
					length = rep.length;
					for (i = 0; i < length; i += 1) {
						k = rep[i];
						if (typeof k === 'string') {
							v = str(k, value);
							if (v) {
								partial.push(quote(k) + (gap ? ': ' : ':') + v);
							}
						}
					}
				} else {
					for (k in value) {
						if (Object.hasOwnProperty.call(value, k)) {
							v = str(k, value);
							if (v) {
								partial.push(quote(k) + (gap ? ': ' : ':') + v);
							}
						}
					}
				}
				gap = mind;
				return v;
		}
	};

	$$_json_stringify = $$_json.stringify = function (value, replacer, space) {
		var i;
		gap = '';
		indent = '';

		if (typeof space === 'number') {
			for (i = 0; i < space; i += 1) {
				indent += ' ';
			}
		} else if (typeof space === 'string') {
			indent = space;
		}

		rep = replacer;
		if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
			throw new Error('JSON.stringify');
		}

		return str('', {'': value});
	};
})();
