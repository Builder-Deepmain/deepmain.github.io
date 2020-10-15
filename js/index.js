// 定义生成随机数的函数getRandom();
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// 获取li元素
var l = document.getElementsByTagName("li");

// //遍历操作 
// function bli() {
//     l[i].style.backgroundColor = "rgb(0, 0, 0, 0.5)";
// }
// bli();

// 开始抽取函数
function start() {
    // 借助getRandom()函数，生成随机数
    var result = getRandom(0,41);
    //控制台输出随机数
    // console.log(result);
    //控制台输出随机数对应的li元素
    // console.log(l[result]);
    // 遍历li元素，当li的索引等于随机数时，结束循环
    // l[i].style.backgroundColor = "rgb(0, 0, 0, 0.5)";
    // for (var j = 0; j < 41; j++) {
    //     // if (j == result) {
    //     //     continue;
    //     // }else {
    //     //     l[i].style.backgroundColor = "rgb(0, 0, 0, 0.5)";
    //     // }
    //     l[i].style.backgroundColor = "rgb(0, 0, 0, 0.5)";
    // }
    // var timeout = setInterval(function () {
    //     // alert("每隔3秒执行一次！");
    //     console.log('遍历：');
    //     // l[i].style.backgroundColor = "rgb(0, 0, 0, 0.5)";
    // },1000);
    
    //为抽中的元素设置样式
    // l[result].style.border = "1px solid #87858d";
    l[result].style.backgroundColor = "rgb(0, 0, 0, 0.5)";
    //控制台输出抽取到li的子元素p
    // console.log(l[result].childNodes[1].childNodes[3].innerHTML);
    // var content = l[result].childNodes[1].childNodes[3].innerHTML;
    //并弹出对话框
    // alert('恭喜: ' + content);
    // return content;
}



// 重置抽取函数
function reset() {
    location.reload();
}

//匹配人名函数
// function select(num) {
//     switch(num) {
//         case 1:
//             alert('恭喜：1');
//             break;
//         default:
//             alert('警告：错误');  
//     }
// }

//启动函数
// function power() {
//     var num1 = parseInt(start());
//     console.log('打印：'+num1)
//     select(num1);
// }