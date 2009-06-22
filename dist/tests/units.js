tests.core = [
	{
		name: 'core',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test core': function () {
			Assert.areSame('http://oatlab.com/oatlib/v2'+':::'+'dumb',o('dumb'));
			Assert.areEqual('http://oatlab.com/oatlib/v2',o);
		}
	}
];
tests['dom-effects'] = [
	{
		name: 'transition',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		_should: {
			error: {
			},
			ignore: {
			}
		},
		setUp: function () {
			setupTransition();
			this.transition = o.transition;
		},
		tearDown: function () {
			tearDownTransition();
		},
		'test transition function': function () {
			var startedPlaying = false;
			this.transition.startPlaying = function () {
				startedPlaying = true;
			};

			this.transition(function(){},1,function(){});
			Assert.isTrue(this.transition.transitions.length > 0,'shouldve added a transition');
			Assert.isTrue(startedPlaying,'shouldve started playing');
			Assert.isTrue('stop' in this.transition.transitions[0],'object in transitions should be a transition object');

		},
		'test transition.getCurrentTime': function () {
			Assert.isTrue(typeof(this.transition.getCurrentTime()) === 'number','shouldve returned a Date obj');
		},
		'test transition.iterate': function () {
			var considerCount = 0,
			currentTimeCount = 0,
			oldCurrentTimeFn = this.transition.getCurrentTime,
			intervalCount = 0,
			oldItervalFn = this.transition.getInterval;

			this.transition.getCurrentTime = function () {
				currentTimeCount++;
				return oldCurrentTimeFn.apply(this);
			},

			this.transition.getInterval = function () {
				intervalCount++;
				return oldItervalFn.apply(this);
			};

			this.transition.transitions = [
				this.transition.getTransition({
					durationInSeconds: 1,
					consider: function () {
						considerCount++;
						return true;
					}
				}),
				this.transition.getTransition({
					durationInSeconds: 2,
					consider: function () {
						considerCount++;
						return true;
					}
				}),
				this.transition.getTransition({
					durationInSeconds: 0.01,
					consider: function () {
						considerCount++;
						return false;
					}
				})
			];
			var shouldntByThis = this.transition.currentTime = 'blahblahlah';
			currentTimeCount = 0;
			this.transition.iterate();
			Assert.isFalse(shouldntByThis === this.transition.currentTime,'was supposed to balete currentTime');
			Assert.areSame(considerCount,3,'shouldve considered all 3 objs');
			Assert.areSame(currentTimeCount,1,'shouldve got the current time exactly once');
			Assert.areSame(intervalCount,1,'shouldve got the interval exactly once');
			Assert.areSame(this.transition.transitions.length,2,'should be 2 transition objs left');
		},
		'test transition.iterate total whipeout': function () {

			var stopPlayingCount = 0;

			this.transition.stopPlaying = function () {
				stopPlayingCount++;
			};

			this.transition.transitions = [
				this.transition.getTransition({
					durationInSeconds: 0.01,
					consider: function () {
						return false;
					}
				}),
				this.transition.getTransition({
					durationInSeconds: 0.01,
					consider: function () {
						return false;
					}
				}),
				this.transition.getTransition({
					durationInSeconds: 0.01,
					consider: function () {
						return false;
					}
				})
			];

			this.transition.iterate();

			Assert.areSame(1,stopPlayingCount,'shouldve stopped playing exactly once');
		},
		'test getInterval': function () {
			this.transition.fps = 10;
			Assert.areSame(this.transition.getInterval(),100,'shouldve been 100, duh');
			this.transition.fps = 22;
			delete this.transition.interval;
			Assert.areSame(this.transition.getInterval(),45,'shouldve been 45, duh');
		},
		'test transitionObj.consider': function () {

			var args = [],
			triedToScheduleFinalRun = false;

			var aTransitionObj = this.transition.getTransition({
				durationInSeconds: 1,
				iterator: function () {
					args.push(arguments);
				},
				scheduleFinalRun: function () {
					triedToScheduleFinalRun = true;
				}
			});
			Assert.isTrue(aTransitionObj.consider(
				aTransitionObj.getEndTime() - 100,45
			),'should return true when 2 cycles are left');
			Assert.areSame(args.length,1,'shouldve iterated once');
			Assert.isFalse(triedToScheduleFinalRun,'shouldnt have tried to schedule a final run');

			Assert.isTrue(aTransitionObj.consider(
				aTransitionObj.getEndTime() - 55,45
			),'should return true when 1 cycle is left');
			Assert.areSame(args.length,2,'shouldve iterated twice now');
			Assert.isFalse(triedToScheduleFinalRun,'shouldnt have tried to schedule a final run');

			Assert.isFalse(aTransitionObj.consider(
				aTransitionObj.getEndTime() - 10,45
			),'should return false when no cycles are left');
			Assert.areSame(args.length,3,'shouldve iterated 3 times now');
			Assert.isTrue(triedToScheduleFinalRun,'should have tried to schedule a final run');
		},
		'test transitionObj.scheduleFinalRun': function () {

			var args = [],
			oldSetTimeoutFn = this.transition.setTimeout,
			setTimeoutArgs = [];

			var aTransitionObj = this.transition.getTransition({
				durationInSeconds: 1,
				iterator: function () {
					args.push(arguments);
				}
			});

			this.transition.setTimeout = function () {
				setTimeoutArgs.push(arguments);
				return oldSetTimeoutFn.apply(this,arguments);
			};

			aTransitionObj.scheduleFinalRun(
				aTransitionObj.getEndTime() - 10
			);

			Assert.areSame(setTimeoutArgs[0][1],10,'shoulve scheduled at about this time');

		},
		'test startPlaying when already playing': function () {
			this.transition.isPlaying = true;
			Assert.isFalse(this.transition.startPlaying(),'shouldve returned false cause we already started duh');
		},
		'test startPlaying': function () {

			var realSetInterval = this.transition.setInterval,
			setIntervalArgs = [];
			this.transition.setInterval = function () {
				setIntervalArgs.push(arguments);
				return realSetInterval.apply(this,arguments);
			};

			var realGetInterval = this.transition.getInterval,
			getIntervalArgs = [];
			this.transition.getInterval = function () {
				getIntervalArgs.push(arguments);
				return realGetInterval.apply(this,arguments);
			};

			this.transition.startPlaying();
			Assert.areSame(setIntervalArgs[0][1],this.transition.interval,'shoulve scheduled with interval');
			Assert.areSame(getIntervalArgs.length,1,'shouldve called getInterval');
			Assert.isTrue(this.transition.intervalHandle !== undefined,'should have a handle');
			Assert.isTrue(this.transition.isPlaying,'shouldve turned this flag on');
		},
		'test stopPlaying': function () {
			Assert.isFalse(this.transition.stopPlaying(),'shouldnt stop cause its not started');
		},
		'test stopPlaying': function () {

			var realClearInterval = this.transition.clearInterval,
			clearIntervalArgs = [];

			this.transition.clearInterval = function () {
				clearIntervalArgs.push(arguments);
				return realClearInterval.apply(this,arguments);
			};

			this.transition.isPlaying = true;

			this.transition.intervalHandle = 234;

			this.transition.stopPlaying();

			Assert.isFalse(this.transition.isPlaying,'shouldve turned this flag off');
			Assert.areSame(clearIntervalArgs[0][0],this.transition.intervalHandle);
		}
	}
];
