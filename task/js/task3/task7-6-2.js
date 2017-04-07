/**
 * Created by Mosqlee on 2017/4/7.
 */
var storage = window.sessionStorage;
var s = storage.data;
var Step1 = {};

console.log(Step1);
var killer = document.getElementById("kill");
var dead = document.getElementById("death");
var speach = document.getElementById("speaches");
var vote = document.getElementById("voter");
var btn = document.getElementById("dropdownMenu1");
var btns =document.getElementsByTagName("li");

   var state1, state2;
//定义对象
function Step() {

}
Step.prototype = {
//    当前状态，步骤1
    state1: "1",
    //切换步骤状态机
    trans1: function() {
        switch (this.state1) {
            case "1":
                this.state1="2";
                change_click();
                break;
            case "2":
                this.state1="3";
                change_click();
                break;
            case "3":
                this.state1="4";
                change_click();
                break;
            default:
                console.log("Invalid State");
                break;
        }
    },
    //切换开启关闭状态机
    state2: "1",
    trans2: function(a) {
        switch(this.state2) {

            case "1":
                this.state2 = "2";
                a.parentNode.className = "dropdown";
                break;
            case "2":
                this.state2 = "1";
                a.parentNode.className = "open dropdown";
                break;
            default:
                console.log("Invalid State")
        }
    }
};
// killer.onclick = function() {
//     if (num == 1) {
//         Step1.trans1();
//         c_color(this);
//       }
//     else {
//         confirm("请进行下一项活动");
//     }
// };
// dead.onclick = function() {
//     if (num == 2) {
//         Step1.trans1();
//         c_color(this);
//         confirm("请死者亮明身份并且发表遗言");
//     }
//     else if (num > 2) {
//         confirm("请进行下一项活动");
//     }
//     else {
//         confirm("")
//     }
// };
// speaches.onclick = function() {
//     if (num == 3) {
//         Step1.trans1();
//         c_color(this);
//     }
//     else if (num > 3) {
//         confirm("请进行下一项活动");
//     }
//     else {
//         confirm("请按顺序操作")
//     }
// };
// vote.onclick = function() {
//     if (num == 4) {
//         Step1.trans1();
//         c_color(this);
//     }
//     else if (num > 4) {
//         confirm("请进行下一项活动");
//     }
//     else {
//         confirm("请按顺序操作")
//     }
// };
//循环写法
if (s) {
    Step1 = JSON.parse(s);
    console.log('获取')
    console.log(Step1);
}
else {
    Step1 =new Step();
    console.log(Step1);
}


function change_click() {
    for (var i = 0; i < btns.length; i++) {
        var num = parseInt(Step1.state1);
        if (i < num - 1) {
            c_color(btns[i]);
            btns[i].onclick = function () {
                confirm("请进行下一项活动");
            }
        }
        else if (i == num - 1) {
            btns[i].onclick = function () {
                Step1.trans1();
                c_color(this);
                if (num == 1) {
                    var storage = window.sessionStorage;
                    var s = JSON.stringify(Step1,function (key, value) {
                        switch (key) {
                            case "trans1":
                                return value;
                        }
                    });
                    alert(s);
                    storage.setItem("data", s);
                    //window.location.href="task7-7.html";
                }
                else if (num == 2) {
                    confirm("请死者亮明身份并且发表遗言")
                }
                else if (num == 3) {
                    confirm("玩家依次发言");
                }
                else if (num == 4) {
                    var s = JSON.stringify(Step1);
                    storage.setItem("data", s);
                    console.log(storage.data);
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
document.getElementsByTagName("body")[0].onload = function() {
    change_click();
};
//改变背景色
function c_color(a) {
    a.style.background = "#83b09a";
    a.childNodes[0].style.borderColor =
        "transparent #83b09a transparent transparent";
}
//调用状态机将第一天设为可以关闭和开启
btn.onclick = function() {
    Step1.trans2(this);
};

