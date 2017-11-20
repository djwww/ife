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

var curIndex=1;
var btn=document.getElementsByTagName("input")[0];
var rq=document.getElementById("rq");
Util.addEvent(btn,"click",change);

function change(){
	rq.style.webkitTransform="rotateY("+(0-curIndex*60)+"deg)";
	curIndex++;
}