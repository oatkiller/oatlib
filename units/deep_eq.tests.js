test({
	name: 'deep_eq',
	'works with one param passed': function () {
		Assert.isTrue(o.deep_eq(false),'just one param');
	},
	'works with no params': function () {
		Assert.isTrue(o.deep_eq(),'no params');
	},
	'works with two numbers': function () {
		Assert.isTrue(o.deep_eq(1,1));
	},
	'works with three numbers': function () {
		Assert.isTrue(o.deep_eq(1,1,1));
	},
	'works with two empty objs': function () {
		Assert.isTrue(o.deep_eq({},{}));
	},
	'works with two dissimilar objs': function () {
		Assert.isFalse(o.deep_eq({a:1},{a:2}),'not similar objects should false');
	},
	'works with two similar objs': function () {
		Assert.isTrue(o.deep_eq({a:1},{a:1}),'similar objects should true');
	},
	'works with a bunch of HUGE CRAZY similar objs': function () {
		Assert.isTrue(o.deep_eq(
			{
				a: 1,
				b: 2,
				c: 3,
				d: {
					e: 5,
					f: {
						g: 6,
						h: [
							0,
							1,
							{
								i: 'a',
								j: true,
								k: null,
								l: undefined,
								m: Math,
								n: Number,
								o: Object,
								p: []
							}
						]
					}
				}
			},
			{
				a: 1,
				b: 2,
				c: 3,
				d: {
					e: 5,
					f: {
						g: 6,
						h: [
							0,
							1,
							{
								i: 'a',
								j: true,
								k: null,
								l: undefined,
								m: Math,
								n: Number,
								o: Object,
								p: []
							}
						]
					}
				}
			},
			{
				a: 1,
				b: 2,
				c: 3,
				d: {
					e: 5,
					f: {
						g: 6,
						h: [
							0,
							1,
							{
								i: 'a',
								j: true,
								k: null,
								l: undefined,
								m: Math,
								n: Number,
								o: Object,
								p: []
							}
						]
					}
				}
			}
		));
	},
	'work with TWO CRAZY HUGE dissimilar objs': function () {
		Assert.isFalse(o.deep_eq(
			{
				a: 1,
				b: 2,
				c: 3,
				d: {
					e: 5,
					f: {
						g: 6,
						h: [
							0,
							1,
							{
								i: 'a',
								j: true,
								k: null,
								l: undefined,
								m: Math,
								n: Number,
								o: Object,
								p: []
							}
						]
					}
				}
			},
			{
				a: 1,
				b: 2,
				c: 3,
				d: {
					e: 5,
					f: {
						g: 6,
						h: [
							0,
							1,
							{
								i: 'a',
								j: true,
								k: null,
								l: undefined,
								m: Math,
								n: Number,
								o: Object,
								p: []
							}
						]
					}
				}
			},
			{
				a: 1,
				b: 2,
				c: 3,
				d: {
					e: 5,
					f: {
						g: 6,
						h: [
							0,
							1,
							{
								i: 'a',
								j: true,
								k: null,
								l: undefined,
								m: Math,
								n: Number,
								o: 'hehe',
								p: []
							}
						]
					}
				}
			}
		));
	}
});
