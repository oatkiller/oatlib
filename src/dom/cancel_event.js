$$_store(function (e) {
	$$_store($$window[$event] && $$window[$event][$cancelBubble] ? function () {
		$$window[$event][$cancelBubble] = $$true;
	} : function (e) {
		e[$stopPropagation]();
	},$cancel_event,[$dom])[$apply](this,arguments);
},$cancel_event,[$dom]);
