(function () {
var $$_function_prototype, $$Function = Function, $prototype = 'prototype', $$_array_prototype, $$Array = Array, $$_bindings, $$_store, $length = 'length', $call = 'call', $each = 'each', $inject = 'inject', $$_slice, $slice = 'slice', $apply = 'apply', $array = 'array', $concat = 'concat', $bind = 'bind', $$null = null, $curry = 'curry', $hasOwnProperty = 'hasOwnProperty', $combine = 'combine', $$true = true, $super_combine = 'super_combine', $constructor = 'constructor', $injector = 'injector', $builder = 'builder', $object_memo = 'object_memo', $get_once = 'get_once', $$_transition, $push = 'push', $transition = 'transition', $$window = window, $setTimeout = 'setTimeout', $clearTimeout = 'clearTimeout', $setInterval = 'setInterval', $clearInterval = 'clearInterval', $$false = false, $$_join, $join = 'join', $string = 'string', $style = 'style', $opacity = 'opacity', $filter = 'filter', $set_opacity = 'set_opacity', $fade = 'fade', emptyString = '';
var emptyString = '',
namespace = 'http://oatlab.com/oatlib/v2',
o,
$$_function_prototype = $$Function[$prototype],
$$_array_prototype = $$Array[$prototype],
$$_bindings = [],
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

o.toString = function () {
	return namespace;
};
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

(setupTransition = function () {

	var that;

	that = $$_transition = $$_store(function (iterator,durationInSeconds,callback) {
		var transitionObj = that.getTransition({
			iterator: iterator,
			durationInSeconds: durationInSeconds,
			callback: callback
		});
		that.transitions[$push](transitionObj);
		delete that.currentTime;
		transitionObj.consider(that.getCurrentTime(),that.getInterval());
		that.startPlaying();
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
			if (this.isPlaying) {
				return $$false;
			}
			this.isPlaying = $$true;
			this.intervalHandle = this[$setInterval](this.iterate[o.bind](this),this.getInterval());
		},
		stopPlaying: function () {
			if (!this.isPlaying) {
				return $$false;
			}
			this[$clearInterval](this.intervalHandle);
			this.isPlaying = $$false;
		},
		fps: 22,
		getInterval: o[$object_memo]('interval',function () {
			return (1E3 / this.fps) >>> 0;
		}),
		getTransition: o[$builder]({
			transition: $$_transition,
			stop: function () {},
			getStartTime: o[$get_once]('getStartTime',function () {
				return this.transition.getCurrentTime();
			}),
			getEndTime: o[$get_once]('getEndTime',function () {
				return this.getDuration() + this.transition.getCurrentTime();
			}),
			getDuration: o[$get_once]('getDuration',function () {
				return this.durationInSeconds * 1E3;
			}),
			consider: function (currentTime,interval) {
				this.iterator(currentTime - this.getStartTime(),this.getDuration());
				if (this.getEndTime() - currentTime > interval) {
					return $$true;
				} else {
					this.scheduleFinalRun(currentTime);
					return $$false;
				}
			},
			scheduleFinalRun: function (currentTime) {
				var that = this;
				this.transition[$setTimeout](function () {
					that.iterator(that.getDuration(),that.getDuration());
					that.callback && that.callback();
				},this.getEndTime() - currentTime);
			}
		}),
		iterate: function () {
			delete this.currentTime;
			var that = this,
			currentTime = that.getCurrentTime(),
			interval = that.getInterval(),
			indiciesToRemove = [],
			transitions = this.transitions;
			transitions[o.each](function (transitionObj,transitionObjIndex) {
				if (!transitionObj.consider(currentTime,interval)) {
					indiciesToRemove[$push](transitionObjIndex);
				}
			});
			for (var i = indiciesToRemove.length - 1; i > -1; i--) {
				transitions.splice(indiciesToRemove[i],1);
			}
			if (!transitions.length) {
				this.stopPlaying();
			}

		},
		getCurrentTime: o.object_memo('currentTime',function () {return new Date().getTime();})
	});

})();

tearDownTransition = function () {
	transition = $$_transition = null;
};
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
})();
