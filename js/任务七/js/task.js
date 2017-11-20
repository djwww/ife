function getId(id){
  return document.getElementById(id);
}

function showArr(){
  aul.innerHTML="";
  for(var i=0;i<arr.length;i++){
    var ali=document.createElement("div");
    ali.style.height=arr[i]+"px";
    aul.appendChild(ali);
  }
}

function testNum(){
  if(/\D/g.test(inputNum.value)||(inputNum.value>100||inputNum.value<10)){
    alert("请输入10-100以内的数字");
    return false;
  }
}

function testIndex(){
  if(arr.length==60){
    alert("不得超过60个数字");
    return false;
  }
}

var inputNum=getId("text1");
var leftIn=getId("lei");
var rightIn=getId("rii");
var leftOut=getId("leo");
var rightOut=getId("rio");
var arr=[];
var msort=getId("msort");
leftIn.onclick=function(){
  if(testNum()===false){
    return;
  }
  if(testIndex()===false){
    return;
  }
  arr.unshift(inputNum.value);
  showArr();
}
rightIn.onclick=function(){
  if(testNum()===false){
    return;
  }
  if(testIndex()===false){
    return;
  }
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
    if(target.nodeName.toLowerCase()=="div"){
      giveIndex();
      arr.splice(target.index,1);
      showArr();
    }
},false)

msort.addEventListener("click",sortDiv,false);

var i=0,j;
function sortDiv(){
  j=0;
  i++;
  if(i===arr.length-1){
    return;
  }
  sortdiv();
  setTimeout(sortDiv,500);
}

function sortdiv(){
  if(arr[j]>arr[j+1]){
    var temp=arr[j];
    arr[j]=arr[j+1];
    arr[j+1]=temp;
    showArr();
    j++;
    if(j===arr.length-1){
      sortDiv();
      return;
    }
    setTimeout(sortdiv,500);
  }
  else{
    j++;
    if(j===arr.length-1){
      sortDiv();
      return;
    }
    setTimeout(sortdiv,500);
  }
}