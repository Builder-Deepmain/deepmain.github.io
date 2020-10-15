// 定义生成随机数的函数getRandom();
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// 获取li元素
var l = document.getElementsByTagName("li");
var i = 0;
var result = 0;
var t = null;
// 开始抽取函数
function start() {
    // 借助getRandom()函数，生成随机数
    result = getRandom(0,41);
    alert('恭喜：' + result);
    //为抽中的元素设置样式
    // l[result].style.backgroundColor = "rgb(0, 0, 0, 0.5)";
    //
    t = setInterval('show()',200);

    // var timeout = setInterval(function () {
    //     // l[i].style.backgroundColor = "rgb(0, 0, 0, 0.5)";  
    //     console.log('test');
    // },1000);

}
//遍历所有li，当li的索引>=随机数时结束
function show() {
    // console.log(l[i]);
    l[i].style.backgroundColor = "rgb(0, 0, 0, 0.5)";
    i = i + 1;
    //如果超过数组长度，清除定时器
    if(i >= result + 1){
        clearInterval(t)
    }
}

// 重置抽取函数
function reset() {
    location.reload();
}