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
			// get a new transitions obj
			setupTransition();
			this.transition = o.transition;
		},
		tearDown: function () {
			// destroy transitions obj
			tearDownTransition();
		},
		'test transition function': function () {
			// should add a transition object to transition.transitions and should start playing
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
			// should return the getTime fer now
			Assert.isTrue(typeof(this.transition.getCurrentTime()) === 'number','shouldve returned a Date obj');
		},
		'test transition.iterate': function () {
			// should delete current time so a new one is calculated for this pass
			// should get a new currentTime
			// should consider all of the transition objects in .transitions. if they are about to expire, schedule their final run and remove them from the transitions object
			// should get the interval once
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
			// reset currentTimeCount cause getTransition uses that too
			currentTimeCount = 0;
			this.transition.iterate();
			Assert.isFalse(shouldntByThis === this.transition.currentTime,'was supposed to balete currentTime');
			Assert.areSame(considerCount,3,'shouldve considered all 3 objs');
			Assert.areSame(currentTimeCount,1,'shouldve got the current time exactly once');
			Assert.areSame(intervalCount,1,'shouldve got the interval exactly once');
			Assert.areSame(this.transition.transitions.length,2,'should be 2 transition objs left');
		},
		'test transition.iterate total whipeout': function () {
			// if all the transtions are in their final run, stopPlaying should be called

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
			// should return the number of milliseconds per interval. intervals are calculated from fps. so for an fps of 10. 100 should be the interval (milliseconds)
			this.transition.fps = 10;
			Assert.areSame(this.transition.getInterval(),100,'shouldve been 100, duh');
			this.transition.fps = 22;
			// its a get_once fn
			delete this.transition.interval;
			Assert.areSame(this.transition.getInterval(),45,'shouldve been 45, duh');
		},
		'test transitionObj.consider': function () {
			// considers the transition against a time in milliseconds. evaluates the iterator with the times passed. if the transition has at least one cycle left, return true. otherwise, schedule the final run, then return false
			// should getStartTime

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
			// should return false if already playing
			this.transition.isPlaying = true;
			Assert.isFalse(this.transition.startPlaying(),'shouldve returned false cause we already started duh');
		},
		'test startPlaying': function () {
			// should call get interval
			// should call setinterval
			// should pass iterate to setinterval
			// should toggle isPlaying;

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
			// should return false if not playing
			Assert.isFalse(this.transition.stopPlaying(),'shouldnt stop cause its not started');
		},
		'test stopPlaying': function () {
			// should call clearInterval with intervalHandle
			// should toggle isPlaying

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

