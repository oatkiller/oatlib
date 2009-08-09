test({
	name: 'deepEq',
	'false when first obj has more properties': function () {
		Assert.isFalse(deepEq({x: 1, y: 2}, {x: 1}),'dissimilar objs should return false');
	},
	'false when second obj has more properties': function () {
		Assert.isFalse(deepEq({x: 1}, {x: 1, y: 2}),'dis similar objs should return false');
	},
	'works with one param passed': function () {
		Assert.isTrue(deepEq(false),'just one param');
	},
	'works with no params': function () {
		Assert.isTrue(deepEq(),'no params');
	},
	'works with two numbers': function () {
		Assert.isTrue(deepEq(1,1));
	},
	'works with three numbers': function () {
		Assert.isTrue(deepEq(1,1,1));
	},
	'works with two empty objs': function () {
		Assert.isTrue(deepEq({},{}));
	},
	'works with two dissimilar objs': function () {
		Assert.isFalse(deepEq({a:1},{a:2}),'not similar objects should false');
	},
	'works with two similar objs': function () {
		Assert.isTrue(deepEq({a:1},{a:1}),'similar objects should true');
	},
	'works with a bunch of HUGE CRAZY similar objs': function () {
		Assert.isTrue(deepEq(
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
		Assert.isFalse(deepEq(
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

