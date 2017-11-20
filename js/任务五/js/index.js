/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = ''
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = [];

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: "北京",
  nowGraTime: "day"
}

/**
 * 渲染图表
 */
function renderChart() {
  var aaa=document.getElementsByClassName("aqi-chart-wrap")[0];
  aaa.innerHTML="";
  for(var i=0;i<chartData.length;i++){
  var adiv=document.createElement("div");
  adiv.style.height=chartData[i]+"px";
  switch(pageState.nowGraTime){
    case "day":adiv.style.width="10px";break;
    case "week":adiv.style.width="20px";break;
    case "month":adiv.style.width="30px";break;
  }
  
  adiv.style.border="1px solid #FFF";
  if(chartData[i]>400){
    adiv.style.backgroundColor="#7B1D1D";
  }else if(chartData[i]>300){
    adiv.style.backgroundColor="#CD2424";
  }else if(chartData[i]>200){
    adiv.style.backgroundColor="#D8E624";
  }else if(chartData[i]>100){
    adiv.style.backgroundColor="#1AE83B";
  }else{
    adiv.style.backgroundColor="#315DF6";
  }
  aaa.appendChild(adiv);
}
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
  // 确定是否选项发生了变化 
  if(this.value!==pageState.nowGraTime){
    pageState.nowGraTime=this.value;
    initAqiChartData();
    renderChart();
  }
  // 设置对应数据

  // 调用图表渲染函数

}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
  // 确定是否选项发生了变化 
  if(this.value!==pageState.nowSelectCity){
    pageState.nowSelectCity=this.value;
    initAqiChartData();
    renderChart();
  }
  // 设置对应数据

  // 调用图表渲染函数
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
  var inputs=document.getElementsByTagName("input");
  for(var i=0;i<inputs.length;i++){
    if(inputs[i].type="radio"){
      inputs[i].addEventListener("click",graTimeChange,false);
    }
  }
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
  var cselect=document.getElementById("city-select");
  var aqiCity=Object.getOwnPropertyNames(aqiSourceData);
  for(var i=0;i<aqiCity.length;i++){
    var aoption=document.createElement("option");
    aoption.innerHTML=aqiCity[i]
    cselect.appendChild(aoption);
  }
  // 给select设置事件，当选项发生变化时调用函数citySelectChange
  cselect.addEventListener("change",citySelectChange,false);
}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式
  if(pageState.nowGraTime=="day"){
    for(var i=0;i<Object.getOwnPropertyNames(aqiSourceData[pageState.nowSelectCity]).length;i++){
      chartData[i]=aqiSourceData[pageState.nowSelectCity][Object.getOwnPropertyNames(aqiSourceData[pageState.nowSelectCity])[i]];
    }
  }
  else if(pageState.nowGraTime=="week"){
      for(var i=0;i<Object.getOwnPropertyNames(aqiSourceData[pageState.nowSelectCity]).length;i++){
      chartData[i]=aqiSourceData[pageState.nowSelectCity][Object.getOwnPropertyNames(aqiSourceData[pageState.nowSelectCity])[i]];
    }
      var chartNew=[];
      var sum=0;
      var k=Math.ceil(chartData.length/7);
      for(var i=0;i<k;i++){
        for(var j=0;j<7;j++){
         sum+=chartData[j];
        }
        chartNew[i]=parseInt(sum/7);
        chartData.splice(0,7);
        sum=0;
      }
      chartData=chartNew;
    }
  else if(pageState.nowGraTime=="month"){
      for(var i=0;i<Object.getOwnPropertyNames(aqiSourceData[pageState.nowSelectCity]).length;i++){
      chartData[i]=aqiSourceData[pageState.nowSelectCity][Object.getOwnPropertyNames(aqiSourceData[pageState.nowSelectCity])[i]];
    }
      var chartNew=[];
      var sum=0;
      for(var j=0;j<31;j++){
        sum+=chartData[j];
      }
      chartNew[0]=parseInt(sum/31);
      chartData.splice(0,31);
      sum=0;
      for(var j=0;j<29;j++){
        sum+=chartData[j];
      }
      chartNew[1]=parseInt(sum/29);
      chartData.splice(0,29);
      sum=0;
      for(var j=0;j<31;j++){
        sum+=chartData[j];
      }
      chartNew[2]=parseInt(sum/31);
      chartData.splice(0,31);
      sum=0;
      chartData=chartNew;
    }

  // 处理好的数据存到 chartData 中
  return chartData;
}

/**
 * 初始化函数
 */
function init() {
  initGraTimeForm()
  initCitySelector();
  initAqiChartData();
  renderChart();
}

init();