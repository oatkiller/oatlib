(function () {
var $$_function_prototype, $$Function = Function, $prototype = 'prototype', $$_array_prototype, $$Array = Array, $$_bindings, $$_store, $toString = 'toString', $$_slice, $slice = 'slice', $apply = 'apply', $array = 'array', $call = 'call', $concat = 'concat', $bind = 'bind', $length = 'length', $each = 'each', $inject = 'inject', $$null = null, $curry = 'curry', $hasOwnProperty = 'hasOwnProperty', $combine = 'combine', $$true = true, $super_combine = 'super_combine', $constructor = 'constructor', $injector = 'injector', $builder = 'builder', $chop = 'chop', $style = 'style', $opacity = 'opacity', $filter = 'filter', $clear_opacity = 'clear_opacity', $$_concat, $map = 'map', $$document = document, $createElement = 'createElement', $innerHTML = 'innerHTML', $$_array, $childNodes = 'childNodes', $domarray = 'domarray', $object_memo = 'object_memo', $get_once = 'get_once', $$_transition, $getTransition = 'getTransition', $transitions = 'transitions', $push = 'push', $currentTime = 'currentTime', $consider = 'consider', $getCurrentTime = 'getCurrentTime', $getInterval = 'getInterval', $startPlaying = 'startPlaying', $transition = 'transition', $$window = window, $setTimeout = 'setTimeout', $clearTimeout = 'clearTimeout', $setInterval = 'setInterval', $clearInterval = 'clearInterval', $$false = false, $isPlaying = 'isPlaying', $intervalHandle = 'intervalHandle', $iterate = 'iterate', $interval = 'interval', $getStartTime = 'getStartTime', $getEndTime = 'getEndTime', $getDuration = 'getDuration', $durationInSeconds = 'durationInSeconds', $iterator = 'iterator', $scheduleFinalRun = 'scheduleFinalRun', $callback = 'callback', $splice = 'splice', $stopPlaying = 'stopPlaying', $$Date = Date, $getTime = 'getTime', $setupTransition = 'setupTransition', $tearDownTransition = 'tearDownTransition', $$_join, $join = 'join', $string = 'string', $set_opacity = 'set_opacity', $fade = 'fade', $appendChild = 'appendChild', $fragment = 'fragment', $indexOf = 'indexOf', $mask = 'mask', $namespace = 'namespace', $node = 'node', $rcurry = 'rcurry', $replace = 'replace', $number = 'number', $supplant = 'supplant', $$String = String, $$_sqrt, $$_asin, $$_abs, $$_PI, $$_sin, $$_pow, $$_cos, $$_transitions, $back = 'back', $ease_in = 'ease_in', $ease_in_out = 'ease_in_out', $ease_out = 'ease_out', $bounce = 'bounce', $circular = 'circular', $cubic = 'cubic', $elastic = 'elastic', $exponential = 'exponential', $linear = 'linear', $quadratic = 'quadratic', $quart = 'quart', $quint = 'quint', $sine = 'sine', $trim = 'trim', $unique = 'unique', emptyString = '';
var namespace = 'http://oatlab.com/oatlib/v2',
o;
$$_function_prototype = $$Function[$prototype];
$$_array_prototype = $$Array[$prototype];
$$_bindings = [];
$$_store = function (fn,name,namespace) {
	if (namespace) {
		var qn = o(name);
		namespace[qn] = fn;
		o[name] = qn;
	} else {
		o[name] = fn;
	}
	return fn;
};

(function () {
 	var prefix = namespace + ':::';
	window[namespace] = o = function (name) {
		return prefix + name;
	};
})();

o[$toString] = function () {
	return namespace;
};
$$_slice = $$_array_prototype[$slice];
$$_store(function (arrayLike) {
	return $$_slice[$apply](arrayLike);
},$array);
$$_store(function (obj) { // holds the logic for curry
	var that = this,
	oldArguments = $$_slice[$call](arguments,1);
	return function () {
		return that[$apply](obj,oldArguments[$concat](o[$array](arguments)));
	};
},$bind,$$_function_prototype);
$$_store(function (fn) {
		var that = this;
	for (var i = 0, length = that[$length]; i < length; i++) {
		fn[$call](that, that[i], i, that);
	}
},$each,$$_array_prototype);
$$_store(function (memo,iterator) {
	this[o[$each]](function (property) {
		memo = iterator[$call](this,memo,property);
	});
	return memo;
},$inject,$$_array_prototype);
$$_store(function () {
	return this[o[$bind]][$apply](this,[$$null][$concat](o[$array](arguments)));
},$curry,$$_function_prototype);
(function () {

	var iterator = function (test,resultObj,anObj) { // combines two objects
		for (var propertyName in anObj) {
			if (test(anObj,propertyName)) {
				resultObj[propertyName] = anObj[propertyName];
			}
		}
		return resultObj;
	},
	combinator = function (anIterator,resultObj) { // combines any number of objects
		return $$_slice[$call](arguments,2)[o[$inject]](resultObj,anIterator);
	};

	$$_store(combinator[o[$curry]](iterator[o[$curry]](function (anObj,propertyName) { // curries combinator with a test to make sure the properties are on the subject argument directly, as opposed to being on its prototype
		return anObj[$hasOwnProperty](propertyName);
	})),$combine);

	$$_store(combinator[o[$curry]](iterator[o[$curry]](function () {return $$true;})),
	$super_combine); // curries combinator with a test that takes every property, including ones on the subject arguments __proto__

})();
$$_store(function (prototype) { // produces a new generic object constructor function
	var fn = function () {
		return o[$super_combine][$apply]($$null,[this][$concat](o[$array](arguments)));
	};
	fn[$prototype] = prototype;
  return fn;
},$constructor);
$$_store(function (memoBuilder, iterator) { // takes a function which returns a new memo and an iterator function. returns a function which wraps inject, passes it a new memo each times its called. see document.getFragmentWithNodes. this is the way you should use inject if the memo is not primitive
	return function () {
		return o[$array](arguments)[o[$inject]](memoBuilder(),iterator);
	};
},$injector);
(function () {

  var singleBuilder = function (prototype) { // takes a prototype and produces a function which takes a properties object and produces an instance
    return function (properties) {
      return new (o[$constructor](prototype))(properties);
    };
	};

	$$_store(o[$injector](function () {return singleBuilder({});},function (aSingleBuilder,aPrototype) {return singleBuilder(aSingleBuilder(aPrototype));}),$builder);

})();
$$_store(function () {
	var that = this;
	that.length--;
	return that;
},$chop,$$_array_prototype);
$$_store(function (node) {
	node[$style][$opacity] = '';
	node[$style][$filter] = 'alpha(opacity=)';
},$clear_opacity);
$$_concat = $$_array_prototype[$concat];
$$_store(function (fn) {
	var that = this,
	length = that[$length],
	response = new $$Array(length), i = 0;

	for (; i < length; i++) {
		response[i] = fn[$call](that,that[i],i,that);
	}
	return response;

},$map,$$_array_prototype);

$$_store(function () { // try to use slice to get an array from an HTML elements collection. if this works, use slice for the array fn, else use an fn that iterates over the array like object and builds a new array incrementally. IE should get the second fn, others should get the first. generally.
	var testDiv = $$document[$createElement]('div');
	testDiv[$innerHTML] = 'a<d></b>';
	try {
		var $$_array = o[$array];
		$$_array(testDiv[$childNodes]);
		$$_store($$_array,$domarray);
	} catch (e) {
		$$_store(function (arrayLike) {
			return $$_array_prototype[o[$map]][$apply](arrayLike,function (a) {return a;});
		},$domarray);
	}
	return o[$domarray][$apply]($$null,arguments);
},$domarray);
$$_store(function (propertyName,calculate) {
	return function () {
		var that = this;
		return that[$hasOwnProperty](propertyName) ? that[propertyName] : (that[propertyName] = calculate[$apply](that,arguments));
	};
},$object_memo);
$$_store(function (methodName,calculate) {
	return function () {
		var value = calculate[$apply](this,arguments);
		return (this[methodName] = function () {
			return value;
		})[$apply](this,arguments);
	};
},$get_once);

($$_store(function () {

	var that;

	that = $$_transition = $$_store(function (iterator,durationInSeconds,callback) {
		var transitionObj = that[$getTransition]({
			iterator: iterator,
			durationInSeconds: durationInSeconds,
			callback: callback
		});
		that[$transitions][$push](transitionObj);
		delete that[$currentTime];
		transitionObj[$consider](that[$getCurrentTime](),that[$getInterval]());
		that[$startPlaying]();
		return $$true;
	},$transition);

	o[$combine]($$_transition,{
		setTimeout: function (fn,time) {
			return $$window[$setTimeout](fn,time);
		},
		clearTimeout: function (handle) {
			return $$window[$clearTimeout](handle);
		},
		setInterval: function (fn,time) {
			return $$window[$setInterval](fn,time);
		},
		clearInterval: function (handle) {
			return $$window[$clearInterval](handle);
		},
		transitions: [],
		isPlaying: $$false,
		startPlaying: function () {
			if (this[$isPlaying]) {
				return $$false;
			}
			this[$isPlaying] = $$true;
			this[$intervalHandle] = this[$setInterval](this[$iterate][o[$bind]](this),this[$getInterval]());
		},
		stopPlaying: function () {
			if (!this[$isPlaying]) {
				return $$false;
			}
			this[$clearInterval](this[$intervalHandle]);
			this[$isPlaying] = $$false;
		},
		fps: 22,
		getInterval: o[$object_memo]($interval,function () {
			return (1E3 / this.fps) >>> 0;
		}),
		getTransition: o[$builder]({
			transition: $$_transition,
			stop: function () {},
			getStartTime: o[$get_once]($getStartTime,function () {
				return this[$transition][$getCurrentTime]();
			}),
			getEndTime: o[$get_once]($getEndTime,function () {
				return this[$getDuration]() + this[$transition][$getCurrentTime]();
			}),
			getDuration: o[$get_once]($getDuration,function () {
				return this[$durationInSeconds] * 1E3;
			}),
			consider: function (currentTime,interval) {
				this[$iterator](currentTime - this[$getStartTime](),this[$getDuration]());
				if (this[$getEndTime]() - currentTime > interval) {
					return $$true;
				} else {
					this[$scheduleFinalRun](currentTime);
					return $$false;
				}
			},
			scheduleFinalRun: function (currentTime) {
				var that = this;
				this[$transition][$setTimeout](function () {
					that[$iterator](that[$getDuration](),that[$getDuration]());
					that[$callback] && that[$callback]();
				},this[$getEndTime]() - currentTime);
			}
		}),
		iterate: function () {
			delete this[$currentTime];
			var that = this,
			currentTime = that[$getCurrentTime](),
			interval = that[$getInterval](),
			indiciesToRemove = [],
			transitions = this[$transitions];
			transitions[o[$each]](function (transitionObj,transitionObjIndex) {
				if (!transitionObj[$consider](currentTime,interval)) {
					indiciesToRemove[$push](transitionObjIndex);
				}
			});
			for (var i = indiciesToRemove[$length] - 1; i > -1; i--) {
				transitions[$splice](indiciesToRemove[i],1);
			}
			if (!transitions[$length]) {
				this[$stopPlaying]();
			}

		},
		getCurrentTime: o[$object_memo]($currentTime,function () {return new $$Date()[$getTime]();})
	});

},$setupTransition))();

$$_store(function () {
	tearDownTransition = function () {
		o[$transition] = $$_transition = $$null;
	};
},$tearDownTransition);
$$_join = $$_array_prototype[$join];
$$_store(function () {
	return $$_join[$call](arguments,emptyString);
},$string);
$$_store(function (node,value) {
	node[$style][$opacity] = value / 10;
	node[$style][$filter] = o[$string]('alpha(opacity=',value * 10,')');
},$set_opacity);

(function () {

	var defaults = {
		start: 10,
		end: 0,
		timeInSeconds: .25,
		callback: function () {},
		aTransition: function (t, b, c, d) {
			return c*t/d + b;
		}
	};

	$$_store(function (node,options) {

		var settings = o[$combine]({},defaults,options),
		aTransition = settings.aTransition,
		start = settings.start,
		end = settings.end,
		timeInSeconds = settings.timeInSeconds,
		change = end - start;

		return o[$transition](function (soFar,total) {
			var value = aTransition(soFar,start,change,total);
			o[$set_opacity](node,value);
		},timeInSeconds,settings.callback);
	},$fade);

})();

$$_store(function () {
	var getFragmentFromNodes = o[$injector](function () {return $$document.createDocumentFragment();},function (fragment,node) {
		fragment[$appendChild](node);
		return fragment;
	}),
	div = $$document[$createElement]('div');
	return $$_store(function (html) {
		div[$innerHTML] = html;
		return getFragmentFromNodes[$apply]($$null,o[$domarray](div[$childNodes]));
	},$fragment)[$apply](this,arguments);
},$fragment);
$$_store(function (element) {

	var that = this,
	length = that[$length],
	from = arguments[1] || 0;

	if (from < 0) {
		from += length;
	}

	for (; from < length; from++) {
		if (that[$hasOwnProperty](from) && that[from] === element) {
			return from;
		}
	}

	return -1;

},$indexOf,$$_array_prototype);
$$_store(function (obj) {
	var C = function () {};
	C[$prototype] = obj;
	return new C();
},$mask);
$$_store(function (obj,namespaceArray) {
	var finalObj = obj;
	namespaceArray[o[$each]](function (namespace) {
		finalObj = obj[namespace] || (obj[namespace] = {});
	});
	return finalObj;
},$namespace);
$$_store(function (html) {
	return o[$fragment](html)[$childNodes][0];
},$node);
(function () {

	$$_store(function () {
		var that = this,
		oldArguments = o[$array](arguments);
		return function () {
			return that[$apply](this,$$_concat[$call](o[$array](arguments),oldArguments));
		};
	},$rcurry,$$_function_prototype);

})();
$$_store(function (o) {
	return this[$replace](/{([^{}]*)}/g,
		function (a,b) {
			var r = o[b];
			return typeof r === $string || typeof r === $number ? r : a;
		}
	);
},$supplant,$$String[$prototype]);
$$_sqrt = Math.sqrt;
$$_asin = Math.asin;
$$_abs = Math.abs;
$$_PI = Math.PI;
$$_sin = Math.sin;
$$_pow = Math.pow;
$$_cos = Math.cos;
$$_transitions = $$_store({},$transitions);
o[$namespace]($$_transitions,[$back])[$ease_in] = function (t, b, c, d) {
	s = s || 1.70158;
	return c*(t/=d)*t*((s+1)*t - s) + b;
};
o[$namespace]($$_transitions,[$back])[$ease_in_out] = function (t, b, c, d) {
	s = s || 1.70158;
	if ((t/=d/2) < 1) {return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;}
	return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
};
o[$namespace]($$_transitions,[$back])[$ease_out] = function (t, b, c, d) {
	s = s || 1.70158;
	return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
};
o[$namespace]($$_transitions,[$bounce])[$ease_out] = function (t, b, c, d) {
	if ((t/=d) < (1/2.75)) {
		return c*(7.5625*t*t) + b;
	} else if (t < (2/2.75)) {
		return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
	} else if (t < (2.5/2.75)) {
		return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
	} else {
		return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
	}
};
(function () {
	var bounce_ease_out = o[$transitions][$bounce][$ease_out];
	o[$namespace]($$_transitions,[$bounce])[$ease_in] = function (t, b, c, d) {
		return c - bounce_ease_out(d-t, 0, c, d) + b;
	};
})();
(function () {
	var bounce_ease_out = o[$transitions][$bounce][$ease_out],
	bounce_ease_in = o[$transitions][$bounce][$ease_in];
	o[$namespace]($$_transitions,[$bounce])[$ease_in_out] = function (t, b, c, d) {
		if (t < d/2) {return bounce_ease_in(t*2, 0, c, d) * 0.5 + b;}
		else {return bounce_ease_out(t*2-d, 0, c, d) * 0.5 + c*0.5 + b;}
	};
})();
o[$namespace]($$_transitions,[$circular])[$ease_in] = function (t, b, c, d) {
	return -c * (sqrt(1 - (t/=d)*t) - 1) + b;
};
o[$namespace]($$_transitions,[$circular])[$ease_in_out] = function (t, b, c, d) {
	if ((t/=d/2) < 1) {return -c/2 * (sqrt(1 - t*t) - 1) + b;}
	return c/2 * (sqrt(1 - (t-=2)*t) + 1) + b;
};
o[$namespace]($$_transitions,[$circular])[$ease_out] = function (t, b, c, d) {
	return c * sqrt(1 - (t=t/d-1)*t) + b;
};
o[$namespace]($$_transitions,[$cubic])[$ease_in] = function (t, b, c, d) {
				return c*(t/=d)*t*t + b;
};
o[$namespace]($$_transitions,[$cubic])[$ease_in_out] = function (t, b, c, d) {
	if ((t/=d/2) < 1) {return c/2*t*t*t + b;}
	return c/2*((t-=2)*t*t + 2) + b;
};
o[$namespace]($$_transitions,[$cubic])[$ease_out] = function (t, b, c, d) {
	return c*((t=t/d-1)*t*t + 1) + b;
};
o[$namespace]($$_transitions,[$elastic])[$ease_in] = function (t, b, c, d) {
	var s;
	if (t===0) {return b;}  if ((t/=d)==1) {return b+c;}  if (!p) {p=d*0.3;}
	if (!a || a < abs(c)) { a=c; s=p/4; }
	else {s = p/(2*PI) * asin(c/a);}
	return -(a*pow(2,10*(t-=1)) * sin( (t*d-s)*(2*PI)/p )) + b;
};
o[$namespace]($$_transitions,[$elastic])[$ease_in_out] = function (t, b, c, d) {
	var s;
	if (t===0) {return b;}  if ((t/=d/2)==2) {return b+c;}  if (!p) {p=d*(0.3*1.5);}
	if (!a || a < abs(c)) { a=c; s=p/4; }
	else {s = p/(2*PI) * asin(c/a);}
	if (t < 1) {return -0.5*(a*pow(2,10*(t-=1)) * sin( (t*d-s)*(2*PI)/p )) + b;}
	return a*pow(2,-10*(t-=1)) * sin( (t*d-s)*(2*PI)/p )*0.5 + c + b;
};

o[$namespace]($$_transitions,[$elastic])[$ease_out] = function (t, b, c, d) {
	var s;
	if (t===0) {return b;}  if ((t/=d)==1) {return b+c;}  if (!p) {p=d*0.3;}
	if (!a || a < abs(c)) { a=c; s=p/4; }
	else {s = p/(2*PI) * asin(c/a);}
	return (a*pow(2,-10*t) * sin( (t*d-s)*(2*PI)/p ) + c + b);
};
o[$namespace]($$_transitions,[$exponential])[$ease_in] = function (t, b, c, d) {
	return (t===0) ? b : c * pow(2, 10 * (t/d - 1)) + b;
};
o[$namespace]($$_transitions,[$exponential])[$ease_in_out] = function (t, b, c, d) {
	if (t===0) {return b;}
	if (t==d) {return b+c;}
	if ((t/=d/2) < 1) {return c/2 * pow(2, 10 * (t - 1)) + b;}
	return c/2 * (-pow(2, -10 * --t) + 2) + b;
};
o[$namespace]($$_transitions,[$exponential])[$ease_out] = function (t, b, c, d) {
	return (t==d) ? b+c : c * (-pow(2, -10 * t/d) + 1) + b;
};
$$_transitions[$linear] = function (t, b, c, d) {
	return c*t/d + b;
};
o[$namespace]($$_transitions,[$quadratic])[$ease_in] = function (t, b, c, d) {
	return c*(t/=d)*t + b;
};
o[$namespace]($$_transitions,[$quadratic])[$ease_in_out] = function (t, b, c, d) {
	if ((t/=d/2) < 1) {return c/2*t*t + b;}
	return -c/2 * ((--t)*(t-2) - 1) + b;
};
o[$namespace]($$_transitions,[$quadratic])[$ease_out] = function (t, b, c, d) {
	return -c *(t/=d)*(t-2) + b;
};
o[$namespace]($$_transitions,[$quart])[$ease_in] = function (t, b, c, d) {
				return c*(t/=d)*t*t*t + b;
};
o[$namespace]($$_transitions,[$quart])[$ease_in_out] = function (t, b, c, d) {
	if ((t/=d/2) < 1) {return c/2*t*t*t*t + b;}
	return -c/2 * ((t-=2)*t*t*t - 2) + b;
};
o[$namespace]($$_transitions,[$quart])[$ease_out] = function (t, b, c, d) {
	return -c * ((t=t/d-1)*t*t*t - 1) + b;
};
o[$namespace]($$_transitions,[$quint])[$ease_in] = function (t, b, c, d) {
	return c*(t/=d)*t*t*t*t + b;
};
o[$namespace]($$_transitions,[$quint])[$ease_in_out] = function (t, b, c, d) {
	if ((t/=d/2) < 1) {return c/2*t*t*t*t*t + b;}
	return c/2*((t-=2)*t*t*t*t + 2) + b;
};
o[$namespace]($$_transitions,[$quint])[$ease_out] = function (t, b, c, d) {
	return c*((t=t/d-1)*t*t*t*t + 1) + b;
};
o[$namespace]($$_transitions,[$sine])[$ease_in] = function (t, b, c, d) {
	return -c * cos(t/d * (PI/2)) + c + b;
};
o[$namespace]($$_transitions,[$sine])[$ease_in_out] = function (t, b, c, d) {
	return -c/2 * (cos(PI*t/d) - 1) + b;
};
o[$namespace]($$_transitions,[$sine])[$ease_out] = function (t, b, c, d) {
	return c * sin(t/d * (PI/2)) + b;
};

$$_store(function () {
	return this[$replace](/^\s+|\s+$/g,emptyString);
},$trim,$$String[$prototype]);
$$_store(function () {
	var uniques = [];
	this[o[$each]](function (raElement) {
		uniques[o[$indexOf]](raElement) === -1 && uniques[$push](raElement);
	});
	return uniques;
},$unique,$$_array_prototype);
})();
