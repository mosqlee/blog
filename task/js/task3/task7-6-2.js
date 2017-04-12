/**
 * Created by Mosqlee on 2017/4/7.
 */
//读取storage中的
var storage = window.sessionStorage;
var play = storage.player;
var player_data = JSON.parse(play);
var r = storage.roles;
roles = JSON.parse(r);
console.log(player_data);
var btns;
var button = document.getElementsByClassName("dropdown-toggle");
var div = document.getElementsByClassName("dropdown");
var div_inner =div[0].innerHTML;
var kill_text = document.getElementsByClassName("kill_text");
var vote_text = document.getElementsByClassName("vote_text");
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
                    window.location.href="task7-7.html";
                }
                else if (num == 2) {
                    confirm("请死者亮明身份并且发表遗言")
                }
                else if (num == 3) {
                    confirm("玩家依次发言");
                }
                else if (num == 4) {
                    c_color(this);
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
    des();
    //关闭过往天数，打开最后一天
    for (var i =0;i <= player_data.day;i++) {
        var btn = button[i];
        var btns = div[i].getElementsByClassName("li");
        if (i < player_data.day) {
            player_data.step = 5;
            player_data.close_open = 2;
        }
        else if (i == player_data.day) {
            player_data.close_open = 1;
            if (player_data.kill ==1 ) {
                player_data.step = 2;
                player_data.kill =0;
            }
            else if(player_data.kill == 0) {
                player_data.step = 1;
            }
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
        if (a.parentNode.className == "open dropdown") {
            a.parentNode.className = "dropdown";
        }
        else if (a.parentNode.className == "dropdown") {
            a.parentNode.className = "open dropdown";
        }

    }
}
//描述
function des() {
    //需要多加一个判断，不然最新的那天自动刷新出来昨晚平安夜
    for (var i=0;i <= player_data.day;i++) {
        k = player_data.number_kill[i];
        v = player_data.number_vote[i];
        if (k<0&&!player_data.merry[i]) {
            kill_text[i].style.display = "block";
            kill_text[i].innerText = "昨天是平安夜"
        }
        else if(k>=0) {
            kill_text[i].style.display = "block";
            kill_text[i].innerText = (k+1)+"号被杀手杀死，真实身份是"+roles[k]
        }
        if(v >= 0) {
            vote_text[i].style.display = "block";
            vote_text[i].innerText = v+1+"号被投票投死了，真实身份是"+roles[v]
        }

    }

}
//其他小按钮
function click() {
    if (confirm("本局游戏是否已结束")) {
        window.location.href="task7-3.html";
    }
}
document.getElementById("back").onclick =function() {
    click()
};
document.getElementById("over").onclick =function() {
    click()
};
