function getId(id){
	return document.getElementById(id);
}

var input=getId("input");
var laad=getId("left-add");
var radd=getId("right-add");
var lout=getId("left-out");
var rout=getId("right-out");
var ulist=getId("ulist");

laad.onclick=function(){
	if(isNaN(input.value)==true){
		alert("请输入数字");
	}
	else{
		showl();
	}
}

radd.onclick=function(){
	if(isNaN(input.value)==true){
		alert("请输入数字");
	}
	else{
		showr();
	}
}

function showl(){
	var li=document.createElement("li");
	li.innerHTML=input.value;
	ulist.insertBefore(li,ulist.firstChild);
	li.onclick=function (){
		ulist.removeChild(li);
	}
}

function showr(){
	var li=document.createElement("li");
	li.innerHTML=input.value;
	ulist.appendChild(li);
	li.onclick=function (){
		ulist.removeChild(li);
	}
}

lout.onclick=function(){
	var al=ulist.firstChild.innerHTML;
	ulist.removeChild(ulist.firstChild);
	alert(al);
}

rout.onclick=function(){
	var al=ulist.lastChild.innerHTML;
	ulist.removeChild(ulist.lastChild);
	alert(al);
}

