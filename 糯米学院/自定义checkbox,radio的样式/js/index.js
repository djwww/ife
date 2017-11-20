var Util={
	addEvent: function(element,event,listener){
		if(element.addEventListener) {
			element.addEventListener(event,listener,false);
		}
		else if(element.attachEvent) {
			element.attachEvent("on"+event,listener);
		}
		else {
			element["on"+event]=listener;
		}
	}
}