function getId(id){
  return document.getElementById(id);
}

function showArr(){
  tagDate.push(inputTag.value);
  for(var i=0;i<tagDate.length;i++){
    var tmpDiv=document.createElement("div");
    tmpDiv.innerHTML=tagDate[i];
    tagList.appendChild(tmpDiv);
  }
}

var aconfirm=document.getElementById("aconfirm");
aconfirm.onclick=function(){
  alert("ad");
}
var inputTag=getId("inputTag");
var tagList=getId("tagList");
var tagDate=[];