function getId(id){
  return document.getElementById(id);
}
function showArr(){
  aul.innerHTML="";
  for(var i=0;i<arr.length;i++){
    var ali=document.createElement("li");
    ali.innerHTML=arr[i];
    aul.appendChild(ali);
  }
}
var inputNum=getId("text1");
var leftIn=getId("lei");
var rightIn=getId("rii");
var leftOut=getId("leo");
var rightOut=getId("rio");
var arr=[];
leftIn.onclick=function(){
  arr.unshift(inputNum.value);
  showArr();
}
rightIn.onclick=function(){
  arr.push(inputNum.value);
  showArr();
}
leftOut.onclick=function(){
  arr.shift();
  showArr();
}
rightOut.onclick=function(){
  arr.pop();
  showArr();
}

function giveIndex(){
  for(var i=0;i<arr.length;i++){
    aul.childNodes[i].index=i;
  }
}

aul.addEventListener("click",function(){
    var event=event||window.event;
    var target=event.target||target.srcElement;
    if(target.nodeName.toLowerCase()=="li"){
      giveIndex();
      arr.splice(target.index,1);
      showArr();
    }
},false)
