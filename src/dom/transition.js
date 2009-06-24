//= require <combine>
//= require <bind>
//= require <builder>
//= require <object_memo>
//= require <get_once>

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
			// go backwards cause were deleting references from an array. they'll rename themselves.. rascals
			for (var i = indiciesToRemove[$length] - 1; i > -1; i--) {
				transitions[$splice](indiciesToRemove[i],1);
			}
			if (!transitions[$length]) {
				this[$stopPlaying]();
			}

		},
		// gets milliseconds of current time
		getCurrentTime: o[$object_memo]($currentTime,function () {return new $$Date()[$getTime]();})
	});

},$setupTransition,[$dom]))();

$$_store(function () {
	tearDownTransition = function () {
		o[$transition] = $$_transition = $$null;
	};
},$tearDownTransition,[$dom]);
