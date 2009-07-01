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
tests.dom = [
	{
		name: 'findAncestorOrSelf',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		testAncestralTarget: function () {
			var myDiv = document.createElement('div');
			myDiv.className = 'itsme';
			myDiv.innerHTML = '<blockquote><p><strong><a href="#" title="">asdf</a></strong></p></blockquote>';
			var target = myDiv.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0];
			var parent = o.dom.find_ancestor_or_self(target,function (node) {
				return node.className === 'itsme';
			});
			Assert.areSame(myDiv,parent);
		},
		testSelfTarget: function () {
			var myDiv = document.createElement('div');
			myDiv.className = 'itsme';
			myDiv.innerHTML = '<blockquote><p><strong><a href="#" title="">asdf</a></strong></p></blockquote>';
			var target = myDiv.childNodes[0].childNodes[0].childNodes[0].childNodes[0];
			var found = o.dom.find_ancestor_or_self(target,function (node) {
				return node.tagName && node.tagName.toLowerCase() === 'a';
			});
			Assert.areSame(target,found);
		}
	}
];
