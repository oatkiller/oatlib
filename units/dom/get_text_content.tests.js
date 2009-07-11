tests.get_text_content = [
	{
		name: 'get_text_content',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test get_text_content': function () {
				var tmpDiv = document.createElement('div'), cells, myRa;
				tmpDiv.innerHTML = '<table><tbody><tr><td></td><td></td><td></td><td></td></tr></tbody></table>';
				cells = tmpDiv.childNodes[0].childNodes[0].childNodes[0].cells;
				myRa = o.dom.array(cells);
				Assert.isNotUndefined(myRa.push);
		}
	}
];
