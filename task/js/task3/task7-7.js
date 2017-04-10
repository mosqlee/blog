/**
 * Created by Mosqlee on 2017/4/5 20:42.this document
 */
var storage = window.sessionStorage;
var r = storage.roles;
roles = JSON.parse(r);
var play = storage.player;
var player_data = JSON.parse(play);
console.log(player_data);
var player = roles.length;
$(document).ready(function () {
    var $element1 = $("main").html();
    var $role = $("main>div:first .degree");
    var $num = $("main>div:first .num");
    $role.text(roles[0]);
    $num.text("1号");
    for (var i = 1; i < player; i++) {
        $("main").append($element1);
        $(".degree").eq(i).text(roles[i]);
        $(".num").eq(i).text(i+1+"号");
    }
});
//生死状态机
function Alive_dead() {
}
Alive_dead.prototype = {
//    当前状态为是否选中
    checked: "none",
    //    当前生死状态
    alive_dead: "alive",
    trans1: function(a) {
        switch (this.checked) {
            case "none":
                this.checked = "selected";
                player_data.selected_none[a] = 1;
                break;
            case "selected":
                this.checked = "none";
                player_data.selected_none[a] = 0;
                break;
        }
    },
    //生到死，强行用状态机，其实没必要
    trans2: function(a) {
        switch (this.alive_dead) {
            case "alive":
                this.alive_dead = "dead";
                player_data.killer_person_alive[a].alive = 0;
                break;
            case "dead":
                this.alive_dead ="dead";
                player_data.killer_person_alive[a].alive = 0;
                break;
        }
    }
};
var Alive = new Alive_dead();
var m;
//
$("body").ready(function() {
    var a = $(".square");
    for (var i = 0;i < roles.length;i++) {
        //先把数据归零
        player_data.selected_none[i] = 0;
        //小方块的点击事件
        a.eq(i).eq(0).click(function(){
            m = a.index($(this));
            visited(m);
        })
    }
});
function visited(m) {
    Alive.trans1(m);
    //被选中了,切换状态为选中状态，选中之后其他小方块切换为未选中
    //小方块的隐藏按钮显示
    //改变confirm的事件
    if (player_data.selected_none[m] = 1) {
        //点击一个，显示一个下标，
        color_cover();
        $(".hidden-icon").eq(m).css("display","block");
    }
}
//confirm事件改变
$(".submit").click(function() {
    if (player_data.selected_none[m] == 1&&
        player_data.killer_person_alive[m].role ==0) {
        //改变生死
        player_data.killer_person_alive[m].alive = 0;
        //记录第一天死的人的号数
        player_data.number_kill[player_data.day] = m;
        window.location.href = "task7-6.html"
    }
    else if (player_data.selected_none[m] == 1&&
        player_data.killer_person_alive[m].role ==1) {
        alert("不能自刀哦！")
    }
    else {
            window.location.href = "task7-6.html"
        }
    var storage = window.sessionStorage;
    var play = JSON.stringify(player_data);
    storage.setItem("player", play);
    });
function color_cover() {
    for (var i = 0;i < roles.length;i++) {
        $(".hidden-icon").eq(i).css("display","none");
    }
}


