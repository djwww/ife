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

var txt1=document.querySelector("input[type='text']"),
	txt2=document.querySelectorAll("input[type='text']")[1];
var btn1=document.querySelector("input[type='button']"),
	btn2=document.querySelectorAll("input[type='button']")[1];

Util.addEvent(btn1,"click",Check1);
function Check1(){
	var vl=txt1.value;
	var reg=/^156|186|111\d{8}$/gim;
	if(reg.test(vl)){
		alert("ture");
	}
	else{
		alert("false");
	}
}
//根据查看别人代码，/\b([a-zA-Z]+)\b\s+\1\b/ 更为简单
Util.addEvent(btn2,"click",Check2);
function Check2(){
	var vl=txt2.value;
	var reg=/\b\w+\b/g;
	var ret;
	while(ret=reg.exec(vl)){
		var retTxt=ret.toString();
		var regg=/\b\w+\b/;
		var vll=vl.substring((ret.index)+retTxt.length+1);
		var rett=regg.exec(vll);
		if(rett&&retTxt==rett.toString()){
			alert("true");
			return;
		}
	}
	alert("false");
}