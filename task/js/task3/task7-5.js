/**
 * Created by Mosqlee on 2017/3/30.
 */
//导入sessionstorage
var storage = window.sessionStorage;
var r = storage.roles;
roles = JSON.parse(r);
//定义变量，Jquery尽量把Jquery的东西放到一个函数
var $play = true;
var $i = 1;
// var card = document.getElementsByClassName("card");
// var roles = document.getElementsByClassName("roles");
// var num = document.getElementById("num");
// var role_num = document.getElementById("role-num");
// var role = document.getElementById("role");
// var before_num = document.getElementById("before-num");
// var after_num = document.getElementById("after-num");
//点击事件
 $("button").click(function() {
         //定义节点
         var $card = $(".card");
         var $roles = $(".roles");
         var $num1 = $("#num1");
         var $num2 = $("#num2");
         var $role_num = $("#role-num");
         var $role = $("#role");
         var $before_num = $("#before-num");
         var $after_num = $("#after-num");
         //显示身份界面
         if ($play) {
             $play = false;
             $card.css("display", "none");
             $roles.css("display", "flex");
             $role_num.text($i);
             $role.text(roles[$i]);
             //加个判断，到最后一个变成法官查看
             if ($i < roles.length) {
                 $i = $i + 1;
                 $before_num.text('隐藏并传递给');
                 $num2.text($i);
                 $after_num.text('号');
             }
             else if ($i = roles.length) {
                 $before_num.text('法官查看');
                 $i =$i + 1;
                 $num2.text('');
                 $after_num.text('');
             }
         }
         //隐藏身份界面
         else {
             if ($i <= roles.length) {
                 $play = true;
                 $card.css("display", "flex");
                 $roles.css("display", "none");
                 $num1.text($i);
                 $before_num.text('查看');
                 $num2.text($i);
                 $after_num.text('号身份');
             }
             //加判断，最后一个再点击就跳转链接到法官查看页面
             else if ($i > roles.length){
                 window.location.href = "task7-2.html";

             }
         }
     }
     //最后一个界面，跳转法官查看
     // else if ($i = roles.length) {
     //     $card.css("display", "none");
     //     $roles.css("display", "flex");
     //     $role_num.text($i);
     //     $role.text(roles[$i]);
     //     $before_num.text('法官查看');
     //     $num2.text('');
     //     $after_num.text('');
     //

);
function click() {
    if (confirm("本局游戏是否已结束")) {
        window.location.href="task7-1.html";
    }
}
$("#close").click(function() {
    click()
});