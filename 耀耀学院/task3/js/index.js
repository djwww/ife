function getId(id){
	return document.getElementById(id);
}

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

var student=getId("student"),
	noStudent=getId("no-student"),
	city=getId("city");
var a=getId("a"),
	b=getId("b");

var college1=getId("college1"),
	college2=getId("college2"),
	college3=getId("college3");
Util.addEvent(student,"change",show1);
Util.addEvent(noStudent,"change",show2);

function show1(){
	a.style.display="block";
	b.style.display="none";
}

function show2(){
	a.style.display="none";
	b.style.display="block";
}

Util.addEvent(city,"change",show3);

function show3(){
	var c=city.value;
	switch(c){
		case "北京": college1.style.display="inline-block";
					 college2.style.display="none";
					 college3.style.display="none";
					 break;
		case "上海": college2.style.display="inline-block";
					 college1.style.display="none";
					 college3.style.display="none";
					 break;
		case "南京": college3.style.display="inline-block";
					 college2.style.display="none";
					 college1.style.display="none";
	}
}

