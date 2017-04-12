/**
 * Created by Mosqlee on 2017/3/31.
 */
var storage = window.sessionStorage;
var r = storage.roles;
var roles = JSON.parse(r);
var player = roles.length;
var play = storage.player;
var player_data = JSON.parse(play);
$(document).ready(function() {
    var $element1 = $("main").html();
    var $role = $("main>div:first .degree");
    var $num = $("main>div:first .num");
    // var $div = $("<div class='box1'></div>");
    $role.text(roles[0]);
    $num.text("1号");
    for (var i = 1; i < player;i++) {
        $("main").append($element1);
        $(".degree").eq(i).text(roles[i]);
        $(".num").eq(i).text(i + 1 + "号");
        //判断是否存活，死亡就变色
        if (player_data.killer_person_alive[i].alive != 1) {
            color_change($(".square").eq(i));
        }
    }
});
function color_change(b) {
    b.css("background","#83b09a")
}
function click() {
    if (confirm("本局游戏是否已结束")) {
        window.location.href="task7-1.html";
    }
}
$("#back").click(function() {
    click()
});