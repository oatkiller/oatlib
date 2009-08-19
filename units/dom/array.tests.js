test({
	name: 'domarray',
	'domArray': function () {
			var tmpDiv = document.createElement('div'), cells, myRa;
			tmpDiv.innerHTML = '<table><tbody><tr><td></td><td></td><td></td><td></td></tr></tbody></table>';
			cells = tmpDiv.childNodes[0].childNodes[0].childNodes[0].cells;
			Assert.areSame(4,cells.length);
			myRa = o.dom.array(cells);
			Assert.isNotUndefined(myRa.push);
	}
});
