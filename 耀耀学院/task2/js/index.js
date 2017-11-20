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

var userName=getId("user-name"),
	userPassword=getId("user-password"),
	userRepassword=getId("user-repassword"),
	userMail=getId("user-mail"),
	userPhone=getId("user-phone");
var ibutton=getId("ibutton");
var jug=[0,0,0,0,0];

Util.addEvent(userName,"focus",fo1);
Util.addEvent(userName,"blur",bl1);
function fo1(){
	this.style.border="2px solid #618CFA";
	this.nextElementSibling.nextElementSibling.innerHTML="必填,长度为4~16个字符";
	this.nextElementSibling.nextElementSibling.style.color="#C9C9C9";
}

function bl1(){
	 var a=this.value.trim();
	 var remind=this.nextElementSibling.nextElementSibling;
	 var reg=/[^\u4e00-\u9fa5a-zA-Z]/g
	 //将中文计算为两个字符
	 var tmpReg=a.replace(/[\u4e00-\u9fa5]/gi,"aa");
	 if(a.length===0){
	   remind.innerHTML="姓名不能为空";
	   this.style.border="2px solid red";
	   remind.style.color="red";
	 }
	 else if(reg.test(a)){
	   remind.innerHTML="请输入中英文";
	   this.style.border="2px solid red";
	   remind.style.color="red";
	 }
	 else if(tmpReg.length>16||tmpReg.length<4){
	   remind.innerHTML="字符长度为4~16";
	   this.style.border="2px solid red";
	   remind.style.color="red";
	 }
	 else{
	   remind.innerHTML="名字格式正确";
	   this.style.border="2px solid green";
	   remind.style.color="green";
	   jug[0]=1;
	 }
}

Util.addEvent(userPassword,"focus",fo2);
Util.addEvent(userPassword,"blur",bl2);
function fo2(){
	this.style.border="2px solid #618CFA";
	this.nextElementSibling.nextElementSibling.innerHTML="长度为6~12位数字";
	this.nextElementSibling.nextElementSibling.style.color="#C9C9C9";
}

function bl2(){
	var a=this.value.trim();
	var remind=this.nextElementSibling.nextElementSibling;
	var reg=/\D/g;
	if(a.length===0){
	   remind.innerHTML="密码不能为空";
	   this.style.border="2px solid red";
	   remind.style.color="red";
	 }
	else if(a.length>16||a.length<4){
		remind.innerHTML="长度错误";
		this.style.border="2px solid red";
	    remind.style.color="red";
	}
	else if(reg.test(a)){
		remind.innerHTML="只能包含数字";
		this.style.border="2px solid red";
	    remind.style.color="red";
	}
	else{
		remind.innerHTML="密码格式正确";
	   	this.style.border="2px solid green";
	   	remind.style.color="green";
	   	jug[1]=1;
	   	bl3();
	}
}

Util.addEvent(userRepassword,"focus",fo3);
Util.addEvent(userRepassword,"blur",bl3);
function fo3(){
	this.style.border="2px solid #618CFA";
	this.nextElementSibling.nextElementSibling.innerHTML="再次输入相同的密码";
	this.nextElementSibling.nextElementSibling.style.color="#C9C9C9";
}
function bl3(){
	var a=userRepassword.value.trim();
	var b=userPassword.value.trim();
	var remind=userRepassword.nextElementSibling.nextElementSibling;
	if(jug[1]!=1){
		remind.innerHTML="请先输入密码";
		remind.style.color="red";
		userRepassword.style.border="2px solid red";
	}
	else if(a!==b){
		remind.innerHTML="请输入相同密码";
		remind.style.color="red";
		userRepassword.style.border="2px solid red";
		jug[2]=0;
	}
	else {
		remind.innerHTML="密码格式正确";
		remind.style.color="green";
		userRepassword.style.border="2px solid green";
		jug[2]=1;
	}
}

Util.addEvent(userMail,"focus",fo4);
Util.addEvent(userMail,"blur",bl4);
function fo4(){
	this.style.border="2px solid #618CFA";
	this.nextElementSibling.nextElementSibling.innerHTML="请输入正确格式的邮箱";
	this.nextElementSibling.nextElementSibling.style.color="#C9C9C9";
}
function bl4(){
	var a=this.value.trim();
	var reg=/\w+@\w+.com$/g;
	var remind=this.nextElementSibling.nextElementSibling;
	if(!reg.test(a)){
		remind.innerHTML="邮箱格式不正确";
		remind.style.color="red";
		this.style.border="2px solid red";
	}
	else {
		remind.innerHTML="邮箱格式正确";
		remind.style.color="green";
		this.style.border="2px solid green";
		jug[3]=1;
	}
}

Util.addEvent(userPhone,"focus",fo5);
Util.addEvent(userPhone,"blur",bl5);
function fo5(){
	this.style.border="2px solid #618CFA";
	this.nextElementSibling.nextElementSibling.innerHTML="请输入正确格式的手机号";
	this.nextElementSibling.nextElementSibling.style.color="#C9C9C9";
}
function bl5(){
	var a=this.value.trim();
	var reg=/^\d{11}$/g;
	var remind=this.nextElementSibling.nextElementSibling;
	if(!reg.test(a)){
		remind.innerHTML="手机格式不正确";
		remind.style.color="red";
		this.style.border="2px solid red";
	}
	else {
		remind.innerHTML="手机格式正确";
		remind.style.color="green";
		this.style.border="2px solid green";
		jug[4]=1;
	}
}

Util.addEvent(ibutton,"click",con);
function con(){
	for(var i=0;i<jug.length;i++){
		if(jug[i]==0){
			alert("错误");
			return false;
		}
	}
}