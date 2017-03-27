/**
 * Created by mosqlee on 2017/3/24.
 */
//js会自动销毁变量，所以这个变量必须设成全局变量
var t2;
// button2，cover other color，stop Interval
document.getElementById("button-2").addEventListener("click", function() {

        get_div(1);
    }

);
//这个函数用来开始或者停止改变颜色
function get_div(t) {
    if (t == 0) {
        t2 = setInterval("shink();", 200);
    }
    else if(t !== 0) {
        var square = document.getElementsByTagName("div");
        for (a = 0; a < 9; a++) {
            square[a].style.backgroundColor = "#FFA500";
        }
        clearInterval(t2);
    }
}
//改变背景颜色的函数
function change_color() {
    return "#"+("00000"+(Math.floor(Math.random()*16777216)).toString(16)).slice(-6);
}
//闪闪闪
function shink() {
    var square = document.getElementsByTagName("div");
    for (a = 0; a < 9; a++) {
        square[a].style.backgroundColor = "#FFA500";
    }
    var x = Math.floor(Math.random() * 9);
    for (var y = 0, z = 0; y == x || y == z || x == z;) {
        y = Math.floor(Math.random() * 9);
        z = Math.floor(Math.random() * 9)
    }
    square[x].style.background = change_color();
    square[y].style.background = change_color();
    square[z].style.background = change_color();
}
