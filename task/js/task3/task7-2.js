/**
 * Created by Mosqlee on 2017/3/31.
 */
var storage = window.sessionStorage;
var r = storage.roles;
var roles = JSON.parse(r);
var player = roles.length;
$(document).ready(function() {
    var $element1 = $("main").html();
    var $role = $("main>div:first .degree");
    var $num = $("main>div:first .num");
    // var $div = $("<div class='box1'></div>");
    $role.text(roles[0]);
    $num.text("1号");
    for (var i = 1; i < player;i++) {
        $("main").append($element1);
        // var $rolek = ;
        // var $numk = ;
        $(".degree").eq(i).text(roles[i]);
        $(".num").eq(i).text(i+1+"号");
        // $("main>div:eq(1) .degree").text(roles[1]);
        // $("main>div:eq(i) .num").text((i+1)+"号")
    }
});
