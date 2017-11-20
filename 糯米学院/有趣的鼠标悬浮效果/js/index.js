var Util={
	addEvent: function(element,event,listener){
		if(element.addEventListener){
			element.addEventListener(event,listener,false);
		}
		else if(element.attachEvent){
			element.attachEvent("on"+event,listener);
		}
		else {
			element["on"+event]=listener;
		}
	}
}

function* count(){
	var arr=[];
	for(var i=0;i<=3;i++){
		arr.push((function(){
			return function(n){
			return n*n
		}
		})(i));
	}
	return arr;
}