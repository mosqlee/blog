/**
 * Created by Mosqlee on 2017/3/30.
 */
//导入sessionstorage
var storage = window.sessionStorage;
var r = storage.roles;
roles = JSON.parse(r);
alert(roles);
//定义变量
var $play = true;
var $card =  $(".card");
var $roles = $(".roles");
var $num = $("#num");
var $role_num = $("#role-num");
var $role = $("#role");
var $before_num = $("#before-num");
var $after_num = $("after-num");
// var card = document.getElementsByClassName("card");
// var roles = document.getElementsByClassName("roles");
// var num = document.getElementById("num");
// var role_num = document.getElementById("role-num");
// var role = document.getElementById("role");
// var before_num = document.getElementById("before-num");
// var after_num = document.getElementById("after-num");

function click() {
    for (var i = 0;i < roles.length;i++) {
        if ($play) {
            $play = false;
            $card.css("display","none");
            $roles.css("display","block");
            $role.text(roles[i]);
            $before_num.text('隐藏并传递给');
            $after_num.text('号');
        }
        else {
            $play = true;
        }
    }
}