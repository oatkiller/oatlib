//= require <array>
//= require <reduce>
o.reducer = function (memo_builder, iterator) { // takes a function which returns a new memo and an iterator function. returns a function which wraps reduce, passes it a new memo each times its called. see document.getFragmentWithNodes. this is the way you should use reduce if the memo is not primitive
	return function () {
		return o.array(arguments)[o.reduce](iterator,memo_builder());
	};
};
