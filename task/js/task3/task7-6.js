/**
 * Created by Mosqlee on 2017/4/4 10:04 AM
 */
// var menu = {
//     //当前状态
//     currentState: 'killer',
//
//     //绑定事件
//     initialize: function() {
//         var self = this;
//         self.on("click", self.transition);
//     },
//
//     //转换状态
//     transition: function () {
//         switch (this.currentState) {
//             case "killer":
//                 this.currentState = 'killer';
//                 change();
//                 break;
//             case "dead":
//                 this.currentState = 'dead';
//                 change();
//             default:
//                 console.log("Invalid State");
//                 break;
//         }
//     }
// };
var killer = document.getElementById("kill");
var dead = document.getElementById("death");
var speach = document.getElementById("speaches");
var vote = document.getElementById("voter");
var btn = document.getElementById("dropdownMenu1");
var btn_tested = false;
var btns = document.getElementsByTagName("li");
var a;
var m;
//点击开启，关闭
btn.onclick = function (){
    if (btn_tested) {
        btn_tested = false;
        btn.parentNode.className = "open dropdown";
    }
    else {
        btn_tested = true;
        btn.parentNode.className = "dropdown";
    }
};
// change_color(kill);
//状态机判断是否点击过，只能顺序点击，四个都点击过就跳转界面，点击第一个之后只能点下一个，点击其他的会弹提示
var menu = {
//      当前状态
    currentState: 'unclicked',

//    绑定事件
    initialize: function(a) {
        var self = a;
        menu.transition(a);
        //抓取节点的index
        for (var x = 0;x < btns.length;x++) {
            if (btns[x].innerHTML == a.innerHTML) {
                m = x;
            }
        }
        for (var y = 0;y < btns.length;y++) {
                //节点前的确认改为“请进行下一项”
            if (y < m + 1) {
                btns[y].onclick = function () {
                    confirm('请进行下一项活动');
                };
            }
            else if (y == m + 1 && y == 1) {
                btns[y].onclick = function () {
                    alert("请死者亮明身份并且发表遗言");
                    change_color(this);
                    menu.initialize(this);
                }
            }
            else if (y == m + 1 && y == 2) {
                btns[y].onclick = function () {
                    alert("玩家依次发言");
                    change_color(this);
                    menu.initialize(this);
                }
            }
            else if (y == m + 1 && y == 3) {
                btns[y].onclick = function () {
                    change_color(this);
                    menu.initialize(this);
                }
            }
        }
        a = btns[m+1];
        },
//    转换状态
    transition: function (a) {
        switch (menu.currentState) {
            case "unclicked":

                menu.currentState = 'clicked';

                a = btns[m+1];
                // window.location.href='task7-7.html';
                break;
            case "clicked":
                menu.currentState = 'unclicked';
                a = btns[m+1];
                break;
            // case "speach":
            //     menu.currentState = 'vote';
            //     confirm("玩家依次发言讨论");
            //     break;
            // case "vote":
            //     menu.currentState = 'vote';
            //     break;
            default:
                console.log('Invalid State!');
                break;
        }
    }
};
//change background-color
function change_color(object) {
    object.style.background = "#83b09a";
    // object.
}
//弹出请按顺序操作
var order = function alert_order() {
    confirm("请按顺序操作")
};
killer.onclick = function() {
    menu.initialize(this);
    change_color(this);
    var storage = window.sessionStorage;
    var m = JSON.stringify(menu);
    storage.setItem("data", m);
    console.log(storage.data);
    window.location.href = "task7-7.html";
    };
//写个循环，让后面的都没办法点
for (var y = 1;y < btns.length;y++) {
    btns[y].onclick = function() {
        confirm("请按顺序操作");
    }
}
    // window.location.href="task7-7.html";
//将变量menu保存在sessionstorage里面
