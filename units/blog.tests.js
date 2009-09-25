test({
	name: 'blog',
	adsf: function () {
String.prototype.isEmail = function () {
	return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(this);
};
Assert.isTrue('robert@oatlab.com'.isEmail());
Assert.isFalse('robertoatlab.com'.isEmail());
Assert.isTrue('webmaster@del.icio.us'.isEmail());
	},
	blah: function () {
// your definition of isEmail
String.prototype.isEmail = function () {
	return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(this);
};

// a definition included by someone else
String.prototype.isEmail = function () {
	return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/.test(this);
};

Assert.isTrue('robert@oatlab.com'.isEmail());
Assert.isFalse('robertoatlab.com'.isEmail());
Assert.isTrue('webmaster@del.icio.us'.isEmail(),'the .us one'); //  this will fail! the definition included by someone else overwrote yours, and doesn't match this address
		
	},
yeaaah: function () {
// a unique url that you own. 
// its possible to guarantee the uniqueness of urls.
// this way there can't be accidental collisions
var namespace = 'http://oatkiller.com/javascript', 

// an object to store namespaces
r = {}, 

// a function that gets your namespace
qualify = function (name) {
	// concat your namespace, a delimiter, and your methods name
	// store it in the namespace object
	var qualified_name = r[name] = namespace + ':::' + name;

	// return the name
	return qualified_name;
};

// your definition, with fancy qualified namespace
String.prototype[qualify('isEmail')] = function () {
	return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(this);
};


// a definition included by someone else
String.prototype.isEmail = function () {
	return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/.test(this);
};

// use the funky [r.isEmail]() syntax to get the qualified namespace
Assert.isTrue('robert@oatlab.com'[r.isEmail]());
Assert.isFalse('robertoatlab.com'[r.isEmail]());
Assert.isTrue('webmaster@del.icio.us'[r.isEmail](),'the .us one');
}

});
