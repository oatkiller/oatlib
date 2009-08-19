test({
	name: 'domarray',
	'domArray': function () {
			var tmpDiv = document.createElement('div'), cells, myRa;
			tmpDiv.innerHTML = '<table><tbody><tr><td></td><td></td><td></td><td></td></tr></tbody></table>';
			cells = tmpDiv.childNodes[0].childNodes[0].childNodes[0].cells;
			Assert.areSame(4,cells.length);
			myRa = o.dom.array(cells);
			Assert.isNotUndefined(myRa.push);
	},
	'documentation': function () {

var errors_caught = 0;

var my_div = document.createElement('div');
my_div.innerHTML = '<span>hi</span><p>a para</p>';

try {
	my_div.childNodes.push() // error, can't push childNodes because its not an array
} catch (e) {
	errors_caught++;
}

// get an array from those child nodes
var my_child_nodes = o.dom.array(my_div.childNodes);

// now this works because my_child_nodes is an array
my_child_nodes.push('anything');
Assert.areSame('anything',my_child_nodes[my_child_nodes.length - 1]);

// my_child_nodes isn't live
my_div.innerHTML = '';

Assert.areSame('SPAN',my_child_nodes[0].tagName); // still has nodes

	}
});
