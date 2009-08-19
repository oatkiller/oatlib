test({
	name: 'mask',
	'mask': function () {
		var obj = {
			name: 'woot'
		},
		masked = o.mask(obj);
		Assert.isTrue('name' in masked);
		Assert.isFalse(masked.hasOwnProperty('name'));
		
	},
	'documentation': function () {

var book = {
	title: 'Anna Karenina',
	author: 'Leo Tolstoy'
};

// my book appears to have all the same properties as book
var my_book = o.mask(book);

// book isn't altered. only my_book
my_book.notes = 'this book rocks';

Assert.isUndefined(book.notes);
Assert.isNotUndefined(my_book.notes);
Assert.isNotUndefined(my_book.title);

	
	}
});
