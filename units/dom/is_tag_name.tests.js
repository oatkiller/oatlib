tests.is_tag_name = [
	{
		name: 'is_tag_name',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
		},
		'testit': function () {

			Assert.isTrue(o.dom.is_tag_name({
				tagName: 'nubs'
			},'nubs'));
		}
	}
];

