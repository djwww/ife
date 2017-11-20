var Util={
	addEvent: function(element,event,listener){
		if(element.addEventListener){
			element.addEventListener(event,listener,false);
		}
		else if(element.attachEvent){
			element.attachEvent("on"+event,listener);
		}
		else{
			element["on"+event]=listener;
		}
	}
}
var riclick=document.getElementById("youjian");
var menu=document.getElementById("menu");
Util.addEvent(riclick,"contextmenu",showlist);
function showlist(){
	var event=event||window.event;
	//阻止默认行为
	event.preventDefault();
	var posX=event.clientX;
	var posY=event.clientY;
	menu.style.display="block";
	if(window.innerWidth-posX<200){
		menu.style.left=(posX-200)+"px";
	}
	else{
		menu.style.left=posX+"px";
	}
	if(window.innerHeight-posY<150){
		menu.style.top=(posY-150)+"px";
	}
	else{
		menu.style.top=posY+"px";
	}
}


