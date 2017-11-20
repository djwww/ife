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

function getId(id){
	return document.getElementById(id);
}

var tb=document.querySelector("tbody");
Util.addEvent(tb,"click",change);
function change(){
	var event=event||window.event;
	var target=event.target||event.srcElement;
	if(target.nodeName.toLowerCase()=="td"){
		//使得文本可编辑
		target.contentEditable=true;
	}
}





var chinese=tb.childNodes[0].childNodes[1];
chinese.index=1;
var math=tb.childNodes[0].childNodes[2];
math.index=2;
var english=tb.childNodes[0].childNodes[3];
english.index=3;
var sum=tb.childNodes[0].childNodes[4];
sum.index=4;
var tr1=document.querySelector("tr:first-child");
Util.addEvent(chinese,"click",sortS);
Util.addEvent(math,"click",sortS);
Util.addEvent(english,"click",sortS);
Util.addEvent(sum,"click",sortS);
var jug=0;
function sortS(){
	var sortArray=[];
	var newArray=[];
	var event=event||window.event;
	var target=event.srcElement||event.target;
	for(var i=1;i<tb.childNodes.length;i++){
		if(tb.childNodes[i].nodeType===1){
			sortArray.push(tb.childNodes[i].childNodes[target.index]);
		}
	}
	if(jug===0){
		sortArray.sort(function(a,b){
		return a.innerHTML-b.innerHTML;
		});
		jug=1;
	}
	else{
		sortArray.sort(function(a,b){
		return b.innerHTML-a.innerHTML;
		});
		jug=0;
	}
	
	for(var j=0;j<sortArray.length;j++){
		newArray[j]=sortArray[j].parentNode;
	}
	tb.innerHTML="";
	tb.appendChild(tr1);
	for(var i=0;i<newArray.length;i++){
		tb.appendChild(newArray[i]);
	}
}

var input=document.querySelector("input");
Util.addEvent(input,"click",addLine);
function addLine(){
	var newTr=document.createElement("tr");
	var newTd1=document.createElement("td");
	var newTd2=document.createElement("td");
	var newTd3=document.createElement("td");
	var newTd4=document.createElement("td");
	var newTd5=document.createElement("td");
	newTr.appendChild(newTd1);
	newTr.appendChild(newTd2);
	newTr.appendChild(newTd3);
	newTr.appendChild(newTd4);
	newTr.appendChild(newTd5);
	tb.appendChild(newTr);
}

