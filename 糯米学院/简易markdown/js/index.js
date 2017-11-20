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

var txt=document.getElementById("markdown");
var ri=document.getElementById("right-side");
var txtArray;
function getArray(){
	var txtValue=txt.value;
	txtArray=txtValue.split("\n");
	dealArray();
}

function dealArray(){
	for(var i=0;i<txtArray.length;i++){
		txtArray[i]=txtArray[i].trim();
		showArray(txtArray[i]);
	}
}

function showArray(el){
	var reg1=/^#{1,6}\s/g;
	var reg2=/^\*\s/g;
	var reg3=/^\d+\.\s/g;
	var reg4=/^>\s/g;
	if(reg1.test(el)){
		var h=document.createElement("h"+reg1.lastIndex);
		h.innerHTML=el.substring(reg1.lastIndex);
		h.setAttribute("class","sh");
		ri.appendChild(h);
	}
	else if(reg2.test(el)){
		var ul=document.createElement("li");
		ul.innerHTML=el.substring(1);
		ul.setAttribute("class","sli");
		ri.appendChild(ul);
	}
	// else if(reg3.test(el)){
	// 	var ol=
	// }
	else if(reg4.test(el)){
		var odiv=document.createElement("div");
		var op=document.createElement("p");
		op.innerHTML=el.substring(1);
		odiv.appendChild(op);
		odiv.setAttribute("class","scite");
		ri.appendChild(odiv);
	}
	else {
		var p=document.createElement("P");
		p.innerHTML=el;
		p.setAttribute("class","sp");
		ri.appendChild(p);
	}
}

function initiate(){
	ri.innerHTML="";
	getArray();
}
Util.addEvent(txt,"keyup",initiate);
