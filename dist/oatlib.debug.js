(function () {
var $$_function_prototype, $$Function = Function, $prototype = 'prototype', $$_array_prototype, $$Array = Array, $$_namespace, $length = 'length', $slice = 'slice', $$_store, $toString = 'toString', $$RegExp = RegExp, $regex = 'regex', $$_join, $join = 'join', $call = 'call', $string = 'string', $className = 'className', $replace = 'replace', $add_class_name = 'add_class_name', $dom = 'dom', $base_event_modifier = 'base_event_modifier', $$_slice, $apply = 'apply', $array = 'array', $concat = 'concat', $bind = 'bind', $$null = null, $curry = 'curry', $addEventListener = 'addEventListener', $attachEvent = 'attachEvent', $on = 'on', $add_event_handler = 'add_event_handler', $this = 'this', $map = 'map', $$document = document, $createElement = 'createElement', $innerHTML = 'innerHTML', $$_array, $childNodes = 'childNodes', $$window = window, $event = 'event', $cancelBubble = 'cancelBubble', $$true = true, $stopPropagation = 'stopPropagation', $cancel_event = 'cancel_event', $take = 'take', $hasOwnProperty = 'hasOwnProperty', $memoize = 'memoize', $$_class_name_test_regex, $style = 'style', $opacity = 'opacity', $filter = 'filter', $clear_opacity = 'clear_opacity', $getElementById = 'getElementById', $element = 'element', $each = 'each', $inject = 'inject', $combine = 'combine', $super_combine = 'super_combine', $constructor = 'constructor', $injector = 'injector', $builder = 'builder', $object_memo = 'object_memo', $get_once = 'get_once', $$_transition, $getTransition = 'getTransition', $transitions = 'transitions', $push = 'push', $currentTime = 'currentTime', $consider = 'consider', $getCurrentTime = 'getCurrentTime', $getInterval = 'getInterval', $startPlaying = 'startPlaying', $transition = 'transition', $setTimeout = 'setTimeout', $clearTimeout = 'clearTimeout', $setInterval = 'setInterval', $clearInterval = 'clearInterval', $$false = false, $isPlaying = 'isPlaying', $intervalHandle = 'intervalHandle', $iterate = 'iterate', $interval = 'interval', $getStartTime = 'getStartTime', $getEndTime = 'getEndTime', $getDuration = 'getDuration', $durationInSeconds = 'durationInSeconds', $iterator = 'iterator', $scheduleFinalRun = 'scheduleFinalRun', $callback = 'callback', $splice = 'splice', $stopPlaying = 'stopPlaying', $$Date = Date, $getTime = 'getTime', $setupTransition = 'setupTransition', $tearDownTransition = 'tearDownTransition', $set_opacity = 'set_opacity', $fade = 'fade', $appendChild = 'appendChild', $fragment = 'fragment', $test = 'test', $has_class_name = 'has_class_name', $node = 'node', $remove_class_name = 'remove_class_name', $removeEventListener = 'removeEventListener', $detachEvent = 'detachEvent', $remove_event_handler = 'remove_event_handler', $ease_in = 'ease_in', $back = 'back', $ease_in_out = 'ease_in_out', $ease_out = 'ease_out', $bounce = 'bounce', $$_sqrt, $$Math = Math, $circular = 'circular', $cubic = 'cubic', $$_abs, $$_asin, $$_pow, $$_sin, $$_pi, $elastic = 'elastic', $exponential = 'exponential', $linear = 'linear', $quadratic = 'quadratic', $quart = 'quart', $quint = 'quint', $$_cos, $sine = 'sine', $for_each = 'for_each', $mask = 'mask', $$Error = Error, $error = 'error', $shift = 'shift', $request = 'request', $remote = 'remote', $readyState = 'readyState', $status = 'status', $onFailure = 'onFailure', $onSuccess = 'onSuccess', $onComplete = 'onComplete', $method = 'method', $GET = 'GET', $async = 'async', $headers = 'headers', $onreadystatechange = 'onreadystatechange', $open = 'open', $url = 'url', $setRequestHeader = 'setRequestHeader', $send = 'send', $post = 'post', $onAbort = 'onAbort', $abort = 'abort', $ajax = 'ajax', $chop = 'chop', $$_concat, $indexOf = 'indexOf', $rcurry = 'rcurry', $number = 'number', $supplant = 'supplant', $$String = String, $trim = 'trim', $unique = 'unique', emptyString = '';
var namespace = 'http://oatlab.com/oatlib/v2',
o,
emptyArray = [];
$$_function_prototype = $$Function[$prototype];
$$_array_prototype = $$Array[$prototype];
$$_namespace = function (ra,obj) {
	obj = obj || o;
	if (!ra[$length]) {
		return obj;
	}
	if (ra[0] in obj) {
		return $$_namespace(ra[$slice](1),obj[ra[0]]);
	} else {
		for (var i = 0, length = ra[$length], propertyName; i < length; i++) {
			propertyName = ra[i];
			obj[propertyName] = {};
			obj = obj[propertyName];
		}
		return obj;
	}
};
(function () {
 	var qname,
	namespace_obj;
	$$_store = function (fn,name,namespace,obj) {
		namespace_obj = $$_namespace(namespace || []);
		if (obj) {
			qname = o(name);
			obj[qname] = fn;
			namespace_obj[name] = qname;
		} else {
			namespace_obj[name] = fn;
		}
		return fn;
	};
})();

(function () {
 	var prefix = namespace + ':::';
	window[namespace] = o = function (name) {
		return prefix + name;
	};
})();

o[$toString] = function () {
	return namespace;
};
$$_store(function (pattern,flags) {
	return new $$RegExp(pattern,flags);
},$regex);
$$_join = $$_array_prototype[$join];
$$_store(function () {
	return $$_join[$call](arguments,emptyString);
},$string);
$$_store(function (element,className) {
	element[$className] = element[$className][$replace](o[$regex](o[$string]('^(?!.*',className,'(\\s+|$))')),o[$string](className,' '));
	return element;
},$add_class_name,[$dom]);
$$_store(function (propertyName,prefix,element,type,fn,bubble) {
	return element[propertyName](prefix + type,fn,bubble);
},$base_event_modifier,[$dom]);

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
},$bind,emptyArray,$$_function_prototype);
$$_store(function () {
	return this[o[$bind]][$apply](this,[$$null][$concat](o[$array](arguments)));
},$curry,emptyArray,$$_function_prototype);
(function () {

	$$_store(function (element,type,fn,bubble) {
		$$_store(element[$addEventListener] ? o[$dom][$base_event_modifier][o[$curry]]($addEventListener,emptyString) : o[$dom][$base_event_modifier][o[$curry]]($attachEvent,$on),$add_event_handler,[$dom])[$apply]($this,arguments);
	},$add_event_handler,[$dom]);

})();

$$_store(function (fn) {
	var that = this,
	length = that[$length],
	response = new $$Array(length), i = 0;

	for (; i < length; i++) {
		response[i] = fn[$call](that,that[i],i,that);
	}
	return response;

},$map,emptyArray,$$_array_prototype);

$$_store(function () { // try to use slice to get an array from an HTML elements collection. if this works, use slice for the array fn, else use an fn that iterates over the array like object and builds a new array incrementally. IE should get the second fn, others should get the first. generally.
	var testDiv = $$document[$createElement]('div');
	testDiv[$innerHTML] = 'a<d></b>';
	try {
		var $$_array = o[$array];
		$$_array(testDiv[$childNodes]);
		$$_store($$_array,$array,[$dom]);
	} catch (e) {
		$$_store(function (arrayLike) {
			return $$_array_prototype[o[$map]][$apply](arrayLike,function (a) {return a;});
		},$array,[$dom]);
	}
	return o[$dom][$array][$apply]($$null,arguments);
},$array,[$dom]);
$$_store(function (e) {
	$$_store($$window[$event] && $$window[$event][$cancelBubble] ? function () {
		$$window[$event][$cancelBubble] = $$true;
	} : function (e) {
		e[$stopPropagation]();
	},$cancel_event,[$dom])[$apply](this,arguments);
},$cancel_event,[$dom]);
$$_store(function (fn) {
	return function (obj) {
		return fn[$apply](obj,$$_slice[$call](arguments,1));
	};
},$take);
(function () {
	var join = o[$take]($$_join);
	$$_store(function (fn,memo) {
		memo = memo || {};
		return function () {
			var key = join(arguments);
			return memo[$hasOwnProperty](key) ? memo[key] : (memo[key] = fn[$apply](this,arguments));
		};
	},$memoize);
})();
$$_class_name_test_regex = o[$memoize](function (className) {
	return o[$regex](o[$string]('(^|\\s+)',className,'(\\s+|$)'));
});
$$_store(function (node) {
	node[$style][$opacity] = emptyString;
	node[$style][$filter] = 'alpha(opacity=)';
},$clear_opacity,[$dom]);
$$_store(function (id) {
	return $$document[$getElementById](id);
},$element,[$dom]);
$$_store(function (fn) {
		var that = this;
	for (var i = 0, length = that[$length]; i < length; i++) {
		fn[$call](that, that[i], i, that);
	}
},$each,emptyArray,$$_array_prototype);
$$_store(function (memo,iterator) {
	this[o[$each]](function (property) {
		memo = iterator[$call](this,memo,property);
	});
	return memo;
},$inject,emptyArray,$$_array_prototype);
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
	},$transition,[$dom]);

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

},$setupTransition,[$dom]))();

$$_store(function () {
	tearDownTransition = function () {
		o[$transition] = $$_transition = $$null;
	};
},$tearDownTransition,[$dom]);
$$_store(function (node,value) {
	node[$style][$opacity] = value / 10;
	node[$style][$filter] = o[$string]('alpha(opacity=',value * 10,')');
},$set_opacity,[$dom]);

(function () {

	var defaults = {
		start: 10,
		end: 0,
		timeInSeconds: .25,
		callback: function (node) {
			o[$dom][$clear_opacity](node);
		},
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

		return o[$dom][$transition](function (soFar,total) {
			var value = aTransition(soFar,start,change,total);
			o[$dom][$set_opacity](node,value);
		},timeInSeconds,settings.callback[o[$curry]](node));
	},$fade,[$dom]);

})();

$$_store(function () {
	var getFragmentFromNodes = o[$injector](function () {return $$document.createDocumentFragment();},function (fragment,node) {
		fragment[$appendChild](node);
		return fragment;
	}),
	div = $$document[$createElement]('div');
	return $$_store(function (html) {
		div[$innerHTML] = html;
		return getFragmentFromNodes[$apply]($$null,o[$dom][$array](div[$childNodes]));
	},$fragment)[$apply](this,arguments);
},$fragment,[$dom]);
$$_store(function (element,className) {
	return $$_class_name_test_regex(className)[$test](element[$className]);
},$has_class_name,[$dom]);
$$_store(function (html) {
	return o[$dom][$fragment](html)[$childNodes][0];
},$node,[$dom]);
$$_store(function (element,className) {
	element[$className] = element[$className][$replace](
		$$_class_name_test_regex(className),
		'$1$2'
	)[$replace](
		/\s+/g,
		' '
	)[$replace](
		/(^\s|\s$)/g,
		emptyString
	);
	return element;
},$remove_class_name,[$dom]);
(function () {

	$$_store(function (element,type,fn,bubble) {
		$$_store(element[$removeEventListener] ? o[$dom][$base_event_modifier][o[$curry]]($removeEventListener,emptyString) : o[$dom][$base_event_modifier][o[$curry]]($detachEvent,$on),$remove_event_handler,[$dom])[$apply]($this,arguments);
	},$remove_event_handler,[$dom]);

})();

$$_store(function (t, b, c, d) {
	s = s || 1.70158;
	return c*(t/=d)*t*((s+1)*t - s) + b;
},$ease_in,[$dom,$transitions,$back]);
$$_store(function (t, b, c, d) {
	s = s || 1.70158;
	if ((t/=d/2) < 1) {return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;}
	return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
},$ease_in_out,[$dom,$transitions,$back]);
$$_store(function (t, b, c, d) {
	s = s || 1.70158;
	return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
},$ease_out,[$dom,$transitions,$back]);
$$_store(function (t, b, c, d) {
	if ((t/=d) < (1/2.75)) {
		return c*(7.5625*t*t) + b;
	} else if (t < (2/2.75)) {
		return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
	} else if (t < (2.5/2.75)) {
		return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
	} else {
		return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
	}
},$ease_out,[$dom,$transitions,$bounce]);
(function () {
	var bounce_ease_out = o[$dom][$transitions][$bounce][$ease_out];
	$$_store(function (t, b, c, d) {
		return c - bounce_ease_out(d-t, 0, c, d) + b;
	},$ease_in,[$dom,$transitions,$bounce]);
})();
(function () {
	var bounce_ease_out = o[$dom][$transitions][$bounce][$ease_out],
	bounce_ease_in = o[$dom][$transitions][$bounce][$ease_in];
	$$_store(function (t, b, c, d) {
		if (t < d/2) {return bounce_ease_in(t*2, 0, c, d) * 0.5 + b;}
		else {return bounce_ease_out(t*2-d, 0, c, d) * 0.5 + c*0.5 + b;}
	},$ease_in_out,[$dom,$transitions,$bounce]);
})();
$$_sqrt = $$Math.sqrt;
$$_store(function (t, b, c, d) {
	return -c * ($$_sqrt(1 - (t/=d)*t) - 1) + b;
},$ease_in,[$dom,$transitions,$circular]);
$$_store(function (t, b, c, d) {
	if ((t/=d/2) < 1) {return -c/2 * ($$_sqrt(1 - t*t) - 1) + b;}
	return c/2 * ($$_sqrt(1 - (t-=2)*t) + 1) + b;
},$ease_in_out,[$dom,$transitions,$circular]);
$$_store(function (t, b, c, d) {
	return c * $$_sqrt(1 - (t=t/d-1)*t) + b;
},$ease_out,[$dom,$transitions,$circular]);
$$_store(function (t, b, c, d) {
	return c*(t/=d)*t*t + b;
},$ease_in,[$dom,$transitions,$cubic]);
$$_store(function (t, b, c, d) {
	if ((t/=d/2) < 1) {return c/2*t*t*t + b;}
	return c/2*((t-=2)*t*t + 2) + b;
},$ease_in_out,[$dom,$transitions,$cubic]);
$$_store(function (t, b, c, d) {
	return c*((t=t/d-1)*t*t + 1) + b;
},$ease_out,[$dom,$transitions,$cubic]);
$$_abs = $$Math.abs;
$$_asin = $$Math.asin;
$$_pow = $$Math.pow;
$$_sin = $$Math.sin;
$$_pi = $$Math.PI;
$$_store(function (t, b, c, d) {
	var s;
	if (t===0) {return b;}  if ((t/=d)==1) {return b+c;}  if (!p) {p=d*0.3;}
	if (!a || a < $$_abs(c)) { a=c; s=p/4; }
	else {s = p/(2*$$_pi) * $$_asin(c/a);}
	return -(a*$$_pow(2,10*(t-=1)) * $$_sin( (t*d-s)*(2*$$_pi)/p )) + b;
},$ease_in,[$dom,$transitions,$elastic]);
$$_store(function (t, b, c, d) {
	var s;
	if (t===0) {return b;}  if ((t/=d/2)==2) {return b+c;}  if (!p) {p=d*(0.3*1.5);}
	if (!a || a < $$_abs(c)) { a=c; s=p/4; }
	else {s = p/(2*$$_pi) * $$_asin(c/a);}
	if (t < 1) {return -0.5*(a*$$_pow(2,10*(t-=1)) * $$_sin( (t*d-s)*(2*$$_pi)/p )) + b;}
	return a*$$_pow(2,-10*(t-=1)) * $$_sin( (t*d-s)*(2*$$_pi)/p )*0.5 + c + b;
},$ease_in_out,[$dom,$transitions,$elastic]);
$$_store(function (t, b, c, d) {
	var s;
	if (t===0) {return b;}  if ((t/=d)==1) {return b+c;}  if (!p) {p=d*0.3;}
	if (!a || a < $$_abs(c)) { a=c; s=p/4; }
	else {s = p/(2*$$_pi) * $$_asin(c/a);}
	return (a*$$_pow(2,-10*t) * $$_sin( (t*d-s)*(2*$$_pi)/p ) + c + b);
},$ease_out,[$dom,$transitions,$elastic]);
$$_store(function (t, b, c, d) {
	return (t===0) ? b : c * $$_pow(2, 10 * (t/d - 1)) + b;
},$ease_in,[$dom,$transitions,$exponential]);
$$_store(function (t, b, c, d) {
	if (t===0) {return b;}
	if (t==d) {return b+c;}
	if ((t/=d/2) < 1) {return c/2 * $$_pow(2, 10 * (t - 1)) + b;}
	return c/2 * (-$$_pow(2, -10 * --t) + 2) + b;
},$ease_in_out,[$dom,$transitions,$exponential]);
$$_store(function (t, b, c, d) {
	return (t==d) ? b+c : c * (-$$_pow(2, -10 * t/d) + 1) + b;
},$ease_out,[$dom,$transitions,$exponential]);
$$_store(function (t, b, c, d) {
	return c*t/d + b;
},$linear,[$dom,$transitions]);
$$_store(function (t, b, c, d) {
	return c*(t/=d)*t + b;
},$ease_in,[$dom,$transitions,$quadratic]);
$$_store(function (t, b, c, d) {
	if ((t/=d/2) < 1) {return c/2*t*t + b;}
	return -c/2 * ((--t)*(t-2) - 1) + b;
},$ease_in_out,[$dom,$transitions,$quadratic]);
$$_store(function (t, b, c, d) {
	return -c *(t/=d)*(t-2) + b;
},$ease_out,[$dom,$transitions,$quadratic]);
$$_store(function (t, b, c, d) {
	return c*(t/=d)*t*t*t + b;
},$ease_in,[$dom,$transitions,$quart]);
$$_store(function (t, b, c, d) {
	if ((t/=d/2) < 1) {return c/2*t*t*t*t + b;}
	return -c/2 * ((t-=2)*t*t*t - 2) + b;
},$ease_in_out,[$dom,$transitions,$quart]);
$$_store(function (t, b, c, d) {
	return -c * ((t=t/d-1)*t*t*t - 1) + b;
},$ease_out,[$dom,$transitions,$quart]);
$$_store(function (t, b, c, d) {
	return c*(t/=d)*t*t*t*t + b;
},$ease_in,[$dom,$transitions,$quint]);
$$_store(function (t, b, c, d) {
	if ((t/=d/2) < 1) {return c/2*t*t*t*t*t + b;}
	return c/2*((t-=2)*t*t*t*t + 2) + b;
},$ease_in_out,[$dom,$transitions,$quint]);
$$_store(function (t, b, c, d) {
	return c*((t=t/d-1)*t*t*t*t + 1) + b;
},$ease_out,[$dom,$transitions,$quint]);
$$_cos = $$Math.cos;
$$_store(function (t, b, c, d) {
	return -c * $$_cos(t/d * ($$_pi/2)) + c + b;
},$ease_in,[$dom,$transitions,$sine]);
$$_store(function (t, b, c, d) {
	return -c/2 * ($$_cos($$_pi*t/d) - 1) + b;
},$ease_in_out,[$dom,$transitions,$sine]);
$$_store(function (t, b, c, d) {
	return c * $$_sin(t/d * ($$_pi/2)) + b;
},$ease_out,[$dom,$transitions,$sine]);
$$_store(function (obj,fn) {
	for (var propertyName in obj) {
		fn(obj[propertyName],propertyName,obj);
	}
},$for_each);
$$_store(function (obj) {
	var C = function () {};
	C[$prototype] = obj;
	return new C();
},$mask);
$$_store(function () {
	throw new $$Error(o[$string][$apply]($$null,o[$array](arguments)));
},$error);
$$_store(function () {
	var requestObject = $$false,
	activeXFn = function (versionString) {
		return new ActiveXObject(versionString);
	},
	fns = [
		activeXFn[o[$curry]]('Msxml2.XMLHTTP'),
		activeXFn[o[$curry]]('Microsoft.XMLHTTP'),
		function () {
			return new XMLHttpRequest();
		}
	];
	while (fns[$length] !== 0) {
		try {
			var fn = fns[$shift]();
			requestObject = fn();

			$$_store(fn,$request);
			return requestObject;
		} catch (e) {
			requestObject = $$false;
		}
	}
	o[$error]('ajax not supported');
	return $$false;
},$request,[$remote]);
(function () {

	var defaultOptions = {},
	handler = function (request,options,call) {
		if (request[$readyState] === 4) {
			var status = request[$status];
			[500,400,200][o[$each]](function (statusCode) {
				if (status >= statusCode) {
					call(options[o[$string]('on',(statusCode / 100) >>> 1,'xx')]);
				}
			});
			if (status > 299) {
				call(options[$onFailure]);
			} else if (status > 199) {
				call(options[$onSuccess]);
			}
			call(options[$onComplete]);
		}
	},
	defaultHeaders = {'User-Agent': 'XMLHTTP/1.0'};

	defaultOptions[$method] = $GET;
	defaultOptions[$async] = $$true;

	$$_store(function (responseOptions) {
		var headers = o[$combine]({},defaultHeaders,responseOptions[$headers]),
		options = o[$combine]({},defaultOptions,responseOptions),
		myRequest = o[$remote][$request](),
		call = function (fn) {
			fn && fn(myRequest,options);
		};
		options[$headers] = headers;
		myRequest[$onreadystatechange] = handler[o[$curry]](myRequest,options,call);
		myRequest[$open](options[$method],options[$url],options[$async]);
		options[$headers] && o[$for_each](options[$headers],function (headerValue,headerLabel) {
			myRequest[$setRequestHeader](headerLabel,headerValue);
		});
		myRequest[$send](options[$post] || $$null);
		return o[$mask](myRequest,{
			abort: function () {
				call(options[$onAbort]);
				myRequest[$onreadystatechange] = $$null;
				myRequest[$abort]();
			}
		});
	},$ajax,[$remote]);

})();

$$_store(function () {
	var that = this;
	that.length--;
	return that;
},$chop,emptyArray,$$_array_prototype);
$$_concat = $$_array_prototype[$concat];
$$_store($$_array_prototype[$indexOf] || function (element) {

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

},$indexOf,emptyArray,$$_array_prototype);
(function () {

	$$_store(function () {
		var that = this,
		oldArguments = o[$array](arguments);
		return function () {
			return that[$apply](this,$$_concat[$call](o[$array](arguments),oldArguments));
		};
	},$rcurry,emptyArray,$$_function_prototype);

})();
$$_store(function (o) {
	return this[$replace](/{([^{}]*)}/g,
		function (a,b) {
			var r = o[b];
			return typeof r === $string || typeof r === $number ? r : a;
		}
	);
},$supplant,emptyArray,$$String[$prototype]);
$$_store(function () {
	return this[$replace](/^\s+|\s+$/g,emptyString);
},$trim,emptyArray,$$String[$prototype]);
$$_store(function () {
	var uniques = [];
	this[o[$each]](function (raElement) {
		uniques[o[$indexOf]](raElement) === -1 && uniques[$push](raElement);
	});
	return uniques;
},$unique,emptyArray,$$_array_prototype);
})();
