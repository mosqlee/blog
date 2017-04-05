/**
 * Created by Mosqlee on 2017/4/5 20:42.
 */
var storage = window.sessionStorage;
var r = storage.roles;
roles = JSON.parse(r);
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

