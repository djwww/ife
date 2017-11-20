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

var allTr=document.getElementsByTagName("tr");
var address=new Array();
for(var i=1;i<allTr.length;i++){
	address[i-1]=[];
	for(var j=3;j<23;j++){
		if(allTr[i].childNodes[j].nodeType===1){
			address[i-1][(j-3)/2]=allTr[i].childNodes[j];
		}
	}
}

var start=document.getElementsByTagName("input")[0],
	go=document.getElementsByTagName("input")[1],
	left=document.getElementsByTagName("input")[2],
	right=document.getElementsByTagName("input")[3],
	back=document.getElementsByTagName("input")[4];

var att="up";
var x=5,y=5;
var pos=address[5][5];
var num=0;
var oDiv=document.createElement("div");
Util.addEvent(start,"click",fncStart);
function fncStart(){
	if(num===0){
		pos.setAttribute("class",pos.getAttribute("class")+" show");
		num=1;
		oDiv.setAttribute("class","line-top");
		pos.appendChild(oDiv);
	}
	else{
		pos.removeChild(oDiv);
		pos.setAttribute("class",pos.getAttribute("class").substr(0,pos.getAttribute("class").length-5));
		pos=address[5][5];
		x=5,y=5;
		pos.setAttribute("class",pos.getAttribute("class")+" show");
		pos.appendChild(oDiv);
	}
}

Util.addEvent(go,"click",fncGo);
function fncGo(){
	switch(att){
	case "up" : 
	if(x>0){
		x=x-1;
	}
	break;
	case "left" : 
	if(y>0){
		y=y-1;
	}
	break;
	case "down" : 
	if(x<9){
		x=x+1;
	}
	break;
	case "right" : 
	if(y<9){
		y=y+1;
	}
	break;
	}
	move();
}

Util.addEvent(left,"click",fncLeft);
function fncLeft(){
	switch(att){
		case "up" :
		att="left";
		break;
		case "left" :
		att="down";
		break;
		case "down" :
		att="right";
		break;
		case "right" :
		att="up";
		break;
	}
	addLine();
}

Util.addEvent(back,"click",fncBack);
function fncBack(){
	switch(att){
		case "up" :
		att="down";
		break;
		case "down" :
		att="up";
		break;
		case "right" :
		att="left";
		break;
		case "left" :
		att="right";
		break;
	}
	addLine();
}

Util.addEvent(right,"click",fncRight);
function fncRight(){
	switch(att){
		case "up" :
		att="right";
		break;
		case "right" :
		att="down";
		break;
		case "down" :
		att="left";
		break;
		case "left" :
		att="up";
		break;
	}
	addLine();
}

function addLine(){
	switch(att){
		case "up":
		oDiv.setAttribute("class","line-top");
		break;
		case "down":
		oDiv.setAttribute("class","line-bottom");
		break;
		case "left":
		oDiv.setAttribute("class","line-left");
		break;
		case "right":
		oDiv.setAttribute("class","line-right");
		break;
	}
}

function move(){
	var tmpTxt=pos.getAttribute("class");
	pos.setAttribute("class",tmpTxt.substr(0,tmpTxt.length-5));
	pos.removeChild(oDiv);
	pos=address[x][y];
	pos.setAttribute("class",pos.getAttribute("class")+" show");
	pos.appendChild(oDiv);
}