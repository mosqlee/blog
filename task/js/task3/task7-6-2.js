/**
 * Created by Mosqlee on 2017/4/7.
 */
//读取storage中的
var storage = window.sessionStorage;
var play = storage.player;
var player_data = JSON.parse(play);
console.log(player_data);
var btns;
var button = document.getElementsByClassName("dropdown-toggle");
var div = document.getElementsByClassName("dropdown");
var div_inner =div[0].innerHTML;

//定义数据对象

console.log(player_data);
//定义fuction对象
function Step() {

}
Step.prototype = {
//    当前状态，步骤1
    state1: "1",
    //切换步骤状态机
    trans1: function(btns) {
        switch (this.state1) {
            case "1":
                this.state1= "2";
                player_data.step++;
                change_click(btns);
                break;
            case "2":
                this.state1= "3";
                player_data.step++;
                change_click(btns);
                break;
            case "3":
                this.state1= "4";
                player_data.step++;
                change_click(btns);
                break;
            case "4":
                this.state1= "4";
                player_data.step++;
                change_click(btns);
                break;
            default:
                console.log("Invalid State");
                break;
        }
    },
    //切换开启关闭状态机
    state2: "1",
    trans2: function() {
        switch(this.state2) {

            case "1":
                this.state2 = "2";
                player_data.close_open = 2;

                break;
            case "2":
                this.state2 = "1";
                player_data.close_open = 1;

                break;
            default:
                console.log("Invalid State")
        }
    }
};
//循环写法
var Step1 =new Step();
function change_click(btns) {
    for (var i = 0; i < btns.length; i++) {
        var num = player_data.step;
        if (i < num - 1) {
            c_color(btns[i]);
            btns[i].onclick = function () {
                confirm("请进行下一项活动");
            }
        }
        else if (i == num - 1) {
            btns[i].onclick = function () {
                Step1.trans1(btns);
                c_color(this);
                if (num == 1) {
                    var storage = window.sessionStorage;
                    var play = JSON.stringify(player_data);
                    storage.setItem("player", play);
                    console.log(play);
                    //window.location.href="task7-7.html";
                }
                else if (num == 2) {
                    confirm("请死者亮明身份并且发表遗言")
                }
                else if (num == 3) {
                    confirm("玩家依次发言");
                }
                else if (num == 4) {
                    c_color(this);
                    player_data.day++;
                    var storage = window.sessionStorage;
                    var play = JSON.stringify(player_data);
                    storage.setItem("player", play);
                    console.log(play);

                    window.location.href="task7-8.html";
                }
            }
        }
        else if (i > num - 1) {
            btns[i].onclick = function () {
                confirm("请按顺序执行");
            }
        }
    }
}
//加载
document.getElementsByTagName("body")[0].onload = function() {
    for (var i = 0;i < player_data.day;i++) {
        var div1 = document.createElement("div");
        div1.innerHTML = div_inner;
        div[0].parentNode.appendChild(div1);
        button[i+1].parentNode.className = "open dropdown";
        button[i+1].innerHTML = "第"+player_data.days[i+1]+"天";
    }
    for (var i =0;i <= player_data.day;i++) {
        var btn = button[i];
        var btns = div[i].getElementsByClassName("li");
        if (i < player_data.day) {
            player_data.step = 5;
            player_data.close_open = 2;
            open(btn);
        }
        else if (i = player_data.day) {
            player_data.step = 1;
            player_data.close_open = 1;
            open(btn);
        }
            change_click(btns);
            open(btn);
            open_onload(btn);
    }
    console.log(btns);
};
//改变背景色函数
function c_color(a) {
    a.style.background = "#83b09a";
    a.childNodes[0].style.borderColor =
        "transparent #83b09a transparent transparent";
}
//调用状态机将第一天设为可以关闭和开启
// btn.onclick = function() {
//
//     open(this)
// };
function open_onload(a) {
    if (player_data.close_open == 2) {
        a.parentNode.className = "dropdown";
    }
    else if (player_data.close_open == 1) {
        a.parentNode.className = "open dropdown";
    }
}
function open(a) {
    a.onclick = function () {
        Step1.trans2();
        if (player_data.close_open == 2) {
            a.parentNode.className = "dropdown";
        }
        else if (player_data.close_open == 1) {
            a.parentNode.className = "open dropdown";
        }

    }
}

// //自己写个获取元素子节点的选择器
// function get_element(a) {
//     var b = {};
//     for (var i = 0,x = 0;i < a.length;i++) {
//         if (a[i].nodeType == 1&&) {
//             b[x] = a[i];
//         }
//     }
// }
//innerafter函数
// function inSertAfter() {
//
// }

