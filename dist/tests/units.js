test({
	name: 'core',
	'core': function () {
		Assert.areEqual('http://oatlab.com/oatlib/v2',o);
	},
	'qname': function () {
		var sample_name = 'butt';
		Assert.areSame(o+':::'+sample_name,o.qname(sample_name));
	}
});
test({
	name: 'are_same',
	'true in this weirder case in ie': function () {
		Assert.isFalse(o.are_same(2,undefined));
	},
	'true in this weird case in ie': function () {
		Assert.isFalse(o.are_same({y: 2},{}));
	},
	'true with all the same string': function () {
		Assert.isTrue(o.are_same('[object Object]','[object Object]','[object Object]'),'[object Object]s');
	},
	'false when first obj has more properties': function () {
		Assert.isFalse(o.are_same({x: 1, y: 2}, {x: 1}),'dissimilar objs should return false');
	},
	'false when second obj has more properties': function () {
		Assert.isFalse(o.are_same({x: 1}, {x: 1, y: 2}),'dis similar objs should return false');
	},
	'works with one param passed': function () {
		Assert.isTrue(o.are_same(false),'just one param');
	},
	'works with no params': function () {
		Assert.isTrue(o.are_same(),'no params');
	},
	'works with two numbers': function () {
		Assert.isTrue(o.are_same(1,1));
	},
	'works with three numbers': function () {
		Assert.isTrue(o.are_same(1,1,1));
	},
	'works with two empty objs': function () {
		var result = o.are_same({},{});
		Assert.isTrue(result);
	},
	'works with two dissimilar objs': function () {
		Assert.isFalse(o.are_same({a:1},{a:2}),'not similar objects should false');
	},
	'works with two similar objs': function () {
		Assert.isTrue(o.are_same({a:1},{a:1}),'similar objects should true');
	},
	'works with a bunch of HUGE CRAZY similar objs': function () {
		Assert.isTrue(o.are_same(
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
		Assert.isFalse(o.are_same(
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
	},
	'documentation': function () {
		(function () {
			Assert.isTrue(o.are_same(1,1)); // true.

			Assert.isTrue(o.are_same('foo','foo','foo','foo')); // true.

			Assert.isTrue(o.are_same([1,2,3],[1,2,3],[1,2,3])); // true.

			Assert.isFalse(o.are_same([1,3,2],[1,2,3])); // false.

			Assert.isFalse(o.are_same([1,2],[1,2,3])); // false.

			Assert.isTrue(o.are_same({
				name: 'robert',
				age: 23,
				favorites: {
					book: 'Wuthering Heights',
					album: 'Bricolages - Ryuichi Sakamoto',
					tea: 'jasmine'
				}
			},{
				name: 'robert',
				age: 23,
				favorites: {
					book: 'Wuthering Heights',
					album: 'Bricolages - Ryuichi Sakamoto',
					tea: 'jasmine'
				}
			})); // true.

			Assert.isFalse(o.are_same({
				name: 'robert',
				age: 23,
				favorites: {
					book: 'War &amp; Peace',
					album: 'Bricolages - Ryuichi Sakamoto',
					tea: 'jasmine'
				}
			},{
				name: 'robert',
				age: 23,
				favorites: {
					book: 'Wuthering Heights',
					album: 'Bricolages - Ryuichi Sakamoto',
					tea: 'jasmine'
				}
			})); // false
		})();
	}
});
