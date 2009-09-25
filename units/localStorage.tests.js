test({
	name: 'localStorage',
	'FFFFFFFFF': function () {
		Assert.isTrue('localStorage' in window,'localStorage doesn\'t exist');
	},
	'speed test': function () {
		var obj = {},
		obj_start_time = new Date().getTime(),
		i;
		for (i = 0; i < 1000; i++) {
			obj[i] = i;
		}
		var obj_offset = new Date().getTime() - obj_start_time,
		local_storage_start_time = new Date().getTime();
		for (i = 0; i < 1000; i++) {
			localStorage[i] = i;
		}
		var local_storage_offset = new Date().getTime() - local_storage_start_time;
		console.log('obj: ',obj_offset,' local_storage: ',local_storage_offset);
	}
});

/*
	local storage speed test on crazy fast pc:

	litmus: setting 1000 values into 1000 keys. control is an object

	numbers reported by javascript, captured with new Date().getTime()

<table><legend>how fast is localStorage compared to an object</legend>
	<thead><tr><th headers="localStorage control" colspan="2" id="safari">safari</th><th headers="localStorage control" id="firefox">firefox</th><th headers="localStorage control" id="IE">IE</th></tr></thead>
	<tbody>
		<tr><th id="localStorage">localStorage</th><td headers="localStorage safari">1-4ms</td><td headers="localStorage firefox">64ms</td><td headers="localStorage IE">90-230ms</td></tr>
		<tr><th id="control">control</th><td headers="control safari">1ms</td><td headers="control firefox">1ms</td><td headers="control IE">0ms</td></tr></tbody></table>
*/
