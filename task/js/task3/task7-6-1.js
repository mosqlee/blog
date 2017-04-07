/**
 * Created by Mosqlee on 2017/4/6 18:36.
 */
var killer = document.getElementById("kill");
var dead = document.getElementById("death");
var speach = document.getElementById("speaches");
var vote = document.getElementById("voter");
var btn = document.getElementById("dropdownMenu1");
var btns = document.getElementsByTagName("li");
var Step2;
//实现点击展开，再点收起的有限状态机
function Button() {

}
Button.prototype = {
    //当前状态
    currentState : "open",
//    绑定事件
//     initialize : function(a) {
//         this.transition(a);
//     },
    transition : function(a) {
        switch(this.currentState) {
            case "open":
                this.currentState = "close";
                a.parentNode.className = "dropdown";
                break;
            case "close":
                this.currentState = "open";
                a.parentNode.className = "open dropdown";
                break;
            default:
                console.log("Invalid State")
        }
    }
};
//调用状态机，将第一天设为可以关闭和开启
var button1 = new Button();
btn.onclick = function() {
    button1.initialize(this)
};
//实现四个步骤的状态机(原型模型写法)，状态机判断是否点击过，只能顺序点击，
// 四个都点击过就跳转界面，点击第一个之后只能点下一个，点击其他的会弹提示
//
function Step() {
}
Step.prototype = {
    //当前状态，杀人步骤
    currentState: "1",
//    绑定事件，加一些函数
//     initialize: function(a) {
//         this.transition(a);
//     },
    //循环改变点击事件
    change_onclick: function (a,Steps) {
        var m;
        var object1 = {};
        var count = 0;
        var n;
//抓取父元素的元素节点
        for (var x = 0, i = 0; x < a.parentNode.childNodes.length; x++) {
            if (a.parentNode.childNodes[x].nodeType == 1) {
                object1[i] = a.parentNode.childNodes[x];
                i++;
            }
        }
        console.log(object1);
        for (i in object1) {
            count++;
        }
        for (var i = 0; i < count; i++) {
            if (object1[i].innerHTML == a.innerHTML) {
                m = i;
            }
        }
    },
    //     for (var y = 0;y < count;y++) {
    //         //节点前的确认改为“请进行下一项”
    //         if (y < m + 1) {
    //             object1[y].onclick = function () {
    //                 confirm('请进行下一项活动');
    //             };
    //         }
    //         else if (y == m + 1 && y == 2) {
    //             object1[y].onclick = function () {
    //                 alert("请死者亮明身份并且发表遗言");
    //                 Steps.transition(this);
    //             }
    //         }
    //         else if (y == m + 1 && y == 3) {
    //             object1[y].onclick = function (Steps) {
    //                 alert("玩家依次发言");
    //                 Steps.color(this);
    //                 Steps.transition(this);
    //             }
    //         }
    //         else if (y == m + 1 && y == 4) {
    //             object1[y].onclick = function (Steps) {
    //                 Steps.color(this);
    //                 Steps.transition(this);
    //             }
    //         }
    //     }
    //     a = btns[m+1];
    // },

    //改变背景色函数
    color: function(a) {
        a.style.background = "#83b09a";
        },
//    请进行下一项活动
    pls_next: function(a) {
        a.onclick = function() {
            confirm("请进行下一项活动");
        }
    },
//    转换状态
    transition: function(a) {
        switch (this.currentState) {
            case "1":
                console.log(this.currentState);
                this.currentState = "2";
                this.color(a);
                this.change_onclick(a,Steps);
                console.log(this.currentState);
                break;
            case "2":
                console.log(this.currentState);
                this.currentState = "3";
                this.color(a);
                this.change_onclick(a,Steps);
                console.log(this.currentState);
                break;
            case "3":
                this.currentState = "4";
                this.color(a);
                this.change_onclick(a,Steps);
                break;
            case "4":
                this.currentState = "4";
                this.color(a);
                var Step2 = new Step();
                break;
        }
}
};
var Step1 =new Step(1);
killer.onclick = function() {
    Step1.transition(this,Step1)
};
//初始状态其他无法点击
for (var y = 1;y < btns.length;y++) {
    btns[y].onclick = function() {
        confirm("请按顺序操作");
    }
}