//= require <node>
//= require <mask>
//= require <combine>
//= require <chop>
//= require <object_memo>
//= require <string>
//= require <trim>
//= require <constructor>
//= require <supplant>
oatlib(function (o) {
	var payload;
	// declare this early in your codebase
	window.onerror = function(message, url, lineNumber) {
		var e = payload || o.mask(new Error());
		payload = null;

		e.message = e.message || message;
		e.lineNumber = e.lineNumber || lineNumber;
		e.fileName = e.fileName || url;
		oatlogErrors.log(oatlogErrors.convert_error(e));
		return true; // prevents browser error messages
	};

	oatlogErrors = function (fn) {
		try {
			fn.apply(this,arguments);
		} catch (e) {
			/*
			var names = [];
			for (var propertyName in e) {
				names.push('!!!',propertyName,'!!!: ',e[propertyName],'\n');
			}
			*/
			if (!window.opera && !(e.lineNumber || e.line)) {
				payload = e;
				throw e;
			} else {
				var fancyError = oatlogErrors.convert_error(e);
				oatlogErrors.log(fancyError);
			}
		}
	};

	(function () {
		var that = this;

		o.combine(oatlogErrors,{
			error_prototype: {
				getLineNumber: o.object_memo('_lineNumber',function () {
					return (that.error_prototype.getLineNumber = this.lineNumber ? function () {
						return this.lineNumber;
					} : this.line ? function () {
						return this.line;
					} : function () {
						return null;
					}).apply(this,arguments);
				}),
				toString: o.object_memo('_toString',function () {
					var parts = [];
					parts.push(o.string('name: ',this.name,'\n',
					'fileName(s): ',this.fileName && this.fileName.join ? this.fileName.join() : this.fileName,'\n',
					'lineNumber: ',this.lineNumber,'\n',
					'message: ',this.message,'\n',
					this.ie_error ? 'ie error: ' + this.ie_error + '\n' : ''));

					if (this.stack) {
						parts.push('stack: \n');
						for (var i = 0, length = this.stack.length; i < length; i++) {
							var stackling = this.stack[i];
							parts.push(stackling.name,stackling.code,':',stackling.line,' (',stackling.file,')','\n');
						}
					}

					return parts.join('');
				}),
				getIEErrorRuntimeError: o.object_memo('ie_error',function () {
					var ieErrors = {
						'5029': 'Array length must be a finite positive integer',
						'5030': 'Array length must be assigned a finite positive number',
						'5028': 'Array or arguments object expected',
						'5010': 'Boolean expected',
						'5003': 'Cannot assign to a function result',
						'5000': 'Cannot assign to "this"',
						'5034': 'Circular reference in value argument not supported',
						'5006': 'Date object expected',
						'5015': 'Enumerator object expected',
						'5022': 'Exception thrown and not caught',
						'5020': 'Expected ")" in regular expression',
						'5019': 'Expected "]" in regular expression',
						'5023': 'Function does not have a valid prototype object',
						'5002': 'Function expected',
						'5008': 'Illegal assignment',
						'5021': 'Invalid range in character set',
						'5035': 'Invalid replacer argument',
						'5014': 'JScript object expected',
						'5001': 'Number expected',
						'5007': 'Object expected',
						'5012': 'Object member expected',
						'5016': 'Regular Expression object expected',
						'5005': 'String expected',
						'5017': 'Syntax error in regular expression',
						'5026': 'The number of fractional digits is out of range',
						'5027': 'The precision is out of range',
						'5025': 'The URI to be decoded is not a valid encoding',
						'5024': 'The URI to be encoded contains an invalid character',
						'5009': 'Undefined identifier',
						'5018': 'Unexpected quantifier',
						'5013': 'VBArray expected'
					};

					return (that.error_prototype.getIEErrorRuntimeError = this.number ? function () {
						return ieErrors[this.number & 0xFFFF];
					} : function () {
						return null;
					}).apply(this,arguments);
				}),
				getName: o.object_memo('_name',function () {
					return (that.error_prototype.getName = this.name ? function () {
						return this.name;
					} : this.message && /Backtrace/.test(this.message) ? function () {
						// safari
						return 'opera';
					} : function () {
						return null;
					}).apply(this,arguments);
				}),
				getStackObj: o.object_memo('_stackObj',function () {
					return (that.error_prototype.getStackObj = this.stack ? function () {
						return o.map(o.chop(this.stack.split(/\n/)),function (callString) {
							return {
								name: callString.match(/(.*)@/)[1],
								file: callString.match(/@(.*):/)[1],
								line: callString.match(/:(\d*)$/)[1]
							};
						})
					} : this.data ? function () {
						// handle that evil opera stuff
						var traceData = this.data.split(/Backtrace:\s*\n/)[1],
						lines = traceData.split('\n'),
						stack = [];
						for (var i = 0, length = lines.length - 1; i < length; i += 2) {
							var line1 = lines[i], line2 = lines[i + 1];
							stack.push({
								file: line1.match(/(?:script in |linked script )(\S*)/)[1],
								line: line1.match(/Line (\d*)/)[1],
								// come back
								code: line2.trim()
							});
						}
						return stack;
					} : function () {
						return null;
					}).apply(this,arguments);
				}),
				getFileName: object_memo('_fileName',function () {
					return (that.error_prototype.getFileName = this.getStackObj() ? function () {
						// come back
						return this.getStackObj().map(function (stackling) {
							return stackling.file;
							// come back
						}).unique();
					} : this.fileName ? function () {
						return this.fileName;
					} : this.sourceURL ? function () {
						return this.sourceURL;
					} : function () {
						return null;
					}).apply(this,arguments);

				})
			},
			get_masked_error: function (e) {
				var C = function () {};
				C.prototype = this.error_prototype;
				var m = new C();
				for (var propertyName in e) {
					m[propertyName] = e[propertyName];
				}
				m.name = e.name; // weirdest opera bug. name cant be for'd over...
				return m;
			},
			log: function (payload) {
				document.body.appendChild(node(string('<pre>',payload,'</pre>')));
			},
			compensate_for_opera: window.opera ? function (e) {
				var masked_error = mask(e);
				//masked_error.fileName = e.message.match(/script in (\S*)/)[1];
				masked_error.lineNumber = e.message.match(/Line (\d*)/)[1];
				masked_error.data = e.message;
				masked_error.message = e.message.match(/^Statement on line \d*: (.*)/)[1];
				return masked_error;
			} : function (e) {return e;},
			convert_error: function (e) {
				var compensated_error = this.compensate_for_opera(e);
				var masked_error = this.get_masked_error(compensated_error);
				combine(masked_error,{
					name: masked_error.getName(),
					fileName: masked_error.getFileName(),
					lineNumber: masked_error.getLineNumber(),
					stack: masked_error.getStackObj(),
					ie_error: masked_error.getIEErrorRuntimeError()
				});
				return masked_error;
			}
		});

	}).apply(oatlogErrors);

});
