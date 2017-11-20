function getId(id){
  return document.getElementById(id);
}

var Uil={
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
//输入中文逗号会遗留到下次
function showArr(event){
  var inputValue=inputTag.value.trim();
  if(event.keyCode===188){
    inputValue=inputValue.substring(0,inputValue.length-1);
  }
  if(tagDate.indexOf(inputValue)!==-1||inputValue==""){
    inputTag.value="";
    return;
  }
  if(tagDate.length===10){
    tagDate.shift();
  }
  tagDate.push(inputValue);
  inputTag.value="";
  tagList.innerHTML="";
  for(var i=0;i<tagDate.length;i++){
    var tmpDiv=document.createElement("div");
    tmpDiv.innerHTML=tagDate[i];
    tagList.appendChild(tmpDiv);
  }
}

function changeTag1(target){
  target.innerHTML=`删除${target.innerHTML}`;
  target.style.backgroundColor="#F32121";
}

function changeTag2(target){
  target.innerHTML=target.innerHTML.substring(2);
  target.style.backgroundColor="#77BAFC";
}

function changeTag3(target){
  for(var i=0;i<tagList.childNodes.length;i++){
    tagList.childNodes[i].index=i;
  }
  target.parentNode.removeChild(target.parentNode.childNodes[target.index]);
  tagDate.splice(target.index,1);
}

var inputTag=getId("inputTag");
var tagList=getId("tagList");
var tagDate=[];

inputTag.addEventListener("keyup",function(){
  var tmpv=event.keyCode;
  if(tmpv===13||tmpv===32||tmpv===188){
    showArr(event);
  }
},false);
//记得同一对象不同事件是可以放在一起的
Uil.addEvent(tagList,"mouseover",function(){
  var event=event||window.event;
  var target=event.target||event.srcElement;
  if(target.id!=="tagList"){
    changeTag1(target);
  }
})

Uil.addEvent(tagList,"mouseout",function(){
  var event=event||window.event;
  var target=event.target||event.srcElement;
  if(target.id!=="tagList"){
    changeTag2(target);
  }
})

Uil.addEvent(tagList,"click",function(){
  var event=event||window.event;
  var target=event.target||event.srcElement;
  if(target.id!=="tagList"){
    changeTag3(target);
  }
})

var int=getId("int");
var conint=getId("conint");
var intarr=[];
var intList=getId("intList");
Uil.addEvent(conint,"click",showint);

function doarr(){
  var intValue=int.value;
  var reg=/[\s\t\n\r、,，]/g;
  var a=intValue.replace(reg,",");
  intarr=a.split(",");
  //利用Set实现数组的去重
  var s=new Set(intarr);
  intarr=Array.from(s);
  for(var i=0;i<intarr.length;i++){
    if(intarr[i]==""){
      intarr.splice(i,1);
    }
  }
  if(intarr.length>10){
    var le=intarr.length;
    intarr.splice(0,le-11);
  }
  return intarr;
}

function showint(){
  doarr();
  intList.innerHTML="";
  for(var i=0;i<intarr.length;i++){
    var tmpDiv=document.createElement("div");
    tmpDiv.innerHTML=intarr[i].trim();
    intList.appendChild(tmpDiv);
  }
}

