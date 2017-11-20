function getId(id){
  return document.getElementById(id);
}

var Util={
  addEvent: function (element,event,listener){
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

var cl=getId("cl");
var inp=getId("inp");
var remind=getId("remind");
Util.addEvent(cl,"click",iconfirm);
Util.addEvent(inp,"focus",fo);
Util.addEvent(inp,"blur",bl);
function fo(){
  inp.style.border="2px solid #439DEE";
}

function bl(){
  inp.style.border="2px solid #BABABA";
}

function iconfirm(){
  var a=inp.value.trim();
  var reg=/[^\u4e00-\u9fa5a-zA-Z]/g
  //将中文计算为两个字符
  var tmpReg=a.replace(/[\u4e00-\u9fa5]/gi,"aa");
  if(a.length===0){
    remind.innerHTML="姓名不能为空";
    inp.style.border="2px solid red";
    remind.style.color="red";
  }
  else if(reg.test(a)){
    remind.innerHTML="请输入中英文";
    inp.style.border="2px solid red";
    remind.style.color="red";
  }
  else if(tmpReg.length>16||tmpReg.length<4){
    remind.innerHTML="字符长度为4~16";
    inp.style.border="2px solid red";
    remind.style.color="red";
  }
  else{
    remind.innerHTML="名字格式正确";
    inp.style.border="2px solid green";
    remind.style.color="green";
  }
}