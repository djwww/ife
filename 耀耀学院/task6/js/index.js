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

var fl=document.getElementById("fl");
var showDiv=document.getElementById("show-div");
var cover=document.getElementById("cover");
Util.addEvent(fl,"click",show);
Util.addEvent(cover,"click",close);
function show(){
	showDiv.style.display="block";
	//外联样式表通过window.getComputedStyle(element)取得属性，并且是只读的;
	showDiv.style.left=(parseInt(window.innerWidth)-parseInt(window.getComputedStyle(showDiv).width))/2+"px";
	showDiv.style.top=(parseInt(window.innerHeight)-parseInt(window.getComputedStyle(showDiv).height))/2+"px";
	cover.style.display="block";
	cover.style.height=window.innerHeight+"px";
	//取消滚动条
	document.body.style.overflow = "hidden"; 
}
var showTop=document.getElementById("show-top");
function close(){
	showDiv.style.display="none";
	cover.style.display="none";
	//恢复滚动条
	document.body.style.overflow = "auto"; 
}

Util.addEvent(showTop,"mousedown",moveDiv1);
var posX,posY;
function moveDiv1(){
	var e=window.event;
	posX=e.clientX-parseInt(showDiv.style.left);
	posY=e.clientY-parseInt(showDiv.style.top);
	document.onmouseover=moveDiv2;
	showTop.onmouseover=moveDiv2;
}

function moveDiv2(){
	var e=window.event;
	showDiv.style.left=(e.clientX-posX)+"px";
	showDiv.style.top=(e.clientY-posY)+"px";
}

Util.addEvent(showTop,"mouseup",moveDiv3);

function moveDiv3(){
	document.onmouseover=null;
	showTop.onmouseover=null;
}