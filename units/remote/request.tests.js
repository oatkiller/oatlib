tests.request = [
	{
		name: 'request',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		testBasic: function () {
			var myRequest = o.remote.request();
			Assert.isTrue('abort' in myRequest,'request return had no abort method');
			Assert.isTrue('abort' in myRequest,'request return had no abort method or property');
			Assert.isTrue('getAllResponseHeaders' in myRequest,'request return had no getAllResponseHeaders method or property');
			Assert.isTrue('getResponseHeader' in myRequest,'request return had no getResponseHeader method or property');
			Assert.isTrue('open' in myRequest,'request return had no open method or property');
			Assert.isTrue('send' in myRequest,'request return had no send method or property');
			Assert.isTrue('setRequestHeader' in myRequest,'request return had no setRequestHeader method or property');
		}
	}
];
