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

var input=document.getElementsByTagName("input");
var square=document.getElementById("block");
var att="up";
Util.addEvent(input[1],"click",doAct);

function doAct(){
	var inputValue=input[0].value;
		switch(inputValue){
			case "TRA LEF" :
				if(parseInt(square.style.left)>31){
					square.style.transition="left 1s ease-in-out 0s";
					var sLeft=square.style.left;
					square.style.left=(parseInt(sLeft)-30)+"px";
				}
				break;
			case "TRA TOP" :
				if(parseInt(square.style.top)>31){
					square.style.transition="top 1s ease-in-out 0s";
					var sTop=square.style.top;
					square.style.top=(parseInt(sTop)-30)+"px";
				}
				break;
			case "TRA RIG" :
				if(parseInt(square.style.left)<301){
					square.style.transition="left 1s ease-in-out 0s";
					var sLeft=square.style.left;
					square.style.left=(parseInt(sLeft)+30)+"px";
				}
				break;
			case "TRA BOT" :
				if(parseInt(square.style.top)<301){
					square.style.transition="top 1s ease-in-out 0s";
					var sTop=square.style.top;
					square.style.top=(parseInt(sTop)+30)+"px";
				}
				break;
			case "MOV LEF" :
				if(parseInt(square.style.left)>31){
					toLeft();
					square.style.transition="left 1s ease-in-out 1s";
					var sLeft=square.style.left;
					square.style.left=(parseInt(sLeft)-30)+"px";
				}
				break;
			case "MOV RIG" :
				if(parseInt(square.style.left)<301){
					toRight();
					square.style.transition="left 1s ease-in-out 1s";
					var sLeft=square.style.left;
					square.style.left=(parseInt(sLeft)+30)+"px";
				}
				break;
			case "MOV BOT" :
				if(parseInt(square.style.top)<301){
					toDown();
					square.style.transition="top 1s ease-in-out 1s";
					var sTop=square.style.top;
					square.style.top=(parseInt(sTop)+30)+"px";
				}
				break;
			case "MOV TOP" :
				if(parseInt(square.style.top)>31){
					toUp();
					square.style.transition="top 1s ease-in-out 1s";
					var sTop=square.style.top;
					square.style.top=(parseInt(sTop)-30)+"px";
				}
				break;
		}
}

function toLeft(){
	switch(att){
		case "up" :
			square.style.animationName="upLeft";
			break;
		case "down" :
			square.style.animationName="downLeft";
			break;
		case "right" :
			square.style.animationName="rightLeft";
			break;
	}
	att="left";
}

function toRight(){
	switch(att){
		case "up" :
			square.style.animationName="upRight";
			break;
		case "down" :
			square.style.animationName="downRight";
			break;
		case "left" :
			square.style.animationName="leftRight";
			break;
	}
	att="right";
}

function toDown(){
	switch(att){
		case "up" :
			square.style.animationName="upBottom";
			break;
		case "right" :
			square.style.animationName="rightBottom";
			break;
		case "left" :
			square.style.animationName="leftBottom";
			break;
	}
	att="down";
}

function toUp(){
	switch(att){
		case "down" :
			square.style.animationName="bottomUp";
			break;
		case "right" :
			square.style.animationName="rightUp";
			break;
		case "left" :
			square.style.animationName="leftUp";
			break;
	}
	att="up";
}