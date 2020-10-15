// 定义生成随机数的函数getRandom();
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// 获取li元素
var l = document.getElementsByTagName("li");
// var text = document.getElementById("#text");
var i = 0;
var result = 0;
var t = null;
// 开始抽取函数
function start() {
    // 借助getRandom()函数，生成随机数
    result = getRandom(0,42);
    // 控制台输出测试
    console.log('随机数为：' + result);
    // 弹出恭喜提示
    // alert('恭喜：' + result);
    //调用begin(),先遍历一遍所有li元素
    // t2 = setInterval('begin()',200);
    //调用遍历函数
    t = setInterval('show()',200);
    var content = l[result].childNodes[1].childNodes[3].innerHTML;
    console.log('返回的文本：' + content);
    // var time = setTimeout(function () {
    //     alert('恭喜：' + content);
    // },200 * (result + 1));
    // clearInterval(time);
    // alert(content);
    // document.getElementById("text").innerHTML = content;
}
//遍历所有li，当li的索引>=随机数时结束
function show() {
    for (var j = 0; j < 42; j++) {
        l[j].style.backgroundColor = "";
    }
    // rgb(0, 0, 0, 0.5)
    l[i].style.backgroundColor = "rgb(0, 0, 0, 0.7)";
    
    
    // document.getElementById("#text").innerText = "content";
    i = i + 1;
    //如果超过数组长度，清除定时器
    if(i >= result + 1){
        clearInterval(t);
    }
}

//begin()函数，先遍历一遍所有的li元素
function begin() {
    for (var j = 0; j < 42; j++) {
        l[j].style.backgroundColor = "";
    }
    // rgb(0, 0, 0, 0.5)
    l[i].style.backgroundColor = "rgb(0, 0, 0, 0.7)";
    
    
    // document.getElementById("#text").innerText = "content";
    i = i + 1;
    //如果超过数组长度，清除定时器
    if(i >= 42){
        clearInterval(t2);
    }
}
// 重置抽取函数
function reset() {
    location.reload();
}