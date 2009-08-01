test({
	name: 'xmlhttp-helper',
	_should: {
		ignore: {
			// no way to actually test this i think :(
			testRequestHeaders: true,
			testPost: true
		}
	},
	testBasic: function () {
		var that = this;
		o.remote.request({
			url: 'ajaxtest.xml',
			on_complete: function (responseObj) {
				Assert.isTrue(responseObj !== null && responseObj !== false,'no response obj');
				that.resume();
			}
		});
		this.wait();
	},
	testRequestHeaders: function () {
		var that = this;
		o.remote.request({
			url: 'ajaxtest.xml',
			headers: {
				'Accept': 'text/*, text/html, text/html;level=1, */*'
			},
			on_complete: function (responseObj) {
				Assert.isTrue(responseObj !== null && responseObj !== false,'no response obj');
				that.resume();
			}
		});
		this.wait();
	},
	testAbort: function () {
		var that = this;
		var myRequest = o.remote.request({
			url: 'ajaxtest.xml',
			on_complete: function (responseObj) {
				Assert.fail('failed to abort');
				that.resume();
			}
		});
		myRequest.abort();
	},
	testStatusText: function () {
		var that = this;
		var myRequest = o.remote.request({
			url: 'ajaxtest.xml',
			on_complete: function (responseObj) {
				Assert.areSame(responseObj.statusText,'OK','failed to get a good status txt');
				that.resume();
			}
		});
		this.wait();
	},
	testOnSuccess: function () {
		var that = this;
		var myRequest = o.remote.request({
			url: 'ajaxtest.xml',
			on_success: function (responseObj,options) {
				that.resume();
				delete options.on_complete;
			},
			on_complete: function () {
				Assert.fail('completed before success');
			}
		});
		this.wait();
	},
	testOnFailure: function () {
		var that = this;
		var myRequest = o.remote.request({
			url: 'asdfasdfasdfa',
			on_failure: function (responseObj,options) {
				that.resume();
				delete options.on_complete;
			},
			on_complete: function () {
				Assert.fail('completed before success');
			}
		});
		this.wait();
	},
	testPost: function () {
		var that = this;
		var myRequest = o.remote.request({
			url: 'ajaxtest.xml',
			post: 'some vars, etc',
			on_success: function (responseObj) {
				that.resume();
			}
		});
		this.wait();
	},
	testResponseXML: function () {
		var that = this;
		var myRequest = o.remote.request({
			url: 'ajaxtest.xml',
			on_success: function (responseObj) {
				Assert.areSame(responseObj.responseXML.childNodes[0].nodeName.toLowerCase(),'root','didnt get root object from xml');
				that.resume();
			}
		});
		this.wait();
	}
});
