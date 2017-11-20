//一局id/tag获取节点
function getId(id){
  return document.getElementById(id);
}
function getTag(tag){
  return document.getElementsByTagName(tag);
}
//封装事件
var Uil={
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

var ro=getId("root");
var arr=[];
var input1=getTag("input")[0];
var input2=getTag("input")[1];
var input3=getTag("input")[2];
var i=0;
var k;
var divarr=getTag("div");
function reset(){
  i=0;
  arr=[];
  for(var j=0;j<divarr.length;j++){
    divarr[j].style.backgroundColor="#fff";
  }
}
//前序遍历
function preOrder(node){
  if(node){
    arr.push(node);
    preOrder(node.firstElementChild);
    preOrder(node.lastElementChild);
  }
}
function pre(){
  reset();
  preOrder(ro);
  render();
}
Uil.addEvent(input1,"click",pre);

//中序遍历
function midOrder(node){
  if(node){
    midOrder(node.firstElementChild);
    arr.push(node);
    midOrder(node.lastElementChild);
  }
}
function mid(){
  reset();
  midOrder(ro);
  render();
}
Uil.addEvent(input2,"click",mid);

//后序遍历
function lstOrder(node){
  if(node){
    lstOrder(node.firstElementChild);
    lstOrder(node.lastElementChild);
    arr.push(node);
  }
}
function lst(){
  reset();
  lstOrder(ro);
  render();
}
Uil.addEvent(input3,"click",lst);

//渲染
function render(){
  clearColor();
  function addColor(){
    if(i==arr.length){
      arr[i-1].style.backgroundColor="#fff";
      return;
    }
    arr[i].style.backgroundColor="#1B0EE2";
    if(i>0){
      arr[i-1].style.backgroundColor="#fff";
    }
    i++;
  }
  k=setInterval(addColor,500);
  function clearColor(){
    clearInterval(k);
  }
}

//firstElementChild和firstChild不同,不会将空白节点算入
//点击按钮运行计时器时需先清除计时器，防止多次点击造成问题