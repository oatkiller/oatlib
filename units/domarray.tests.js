tests.domarray = [
	{
		name: 'domarray',
		'test domArray': function () {
			oatlib(function (o) {
				var tmpDiv = document.createElement('div'), cells, myRa;
				tmpDiv.innerHTML = '<table><tbody><tr><td></td><td></td><td></td><td></td></tr></tbody></table>';
				cells = tmpDiv.childNodes[0].childNodes[0].childNodes[0].cells;
				myRa = o.domarray(cells);
				Assert.isNotUndefined(myRa.push);
			});
		}
	}
];
