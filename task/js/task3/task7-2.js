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
        $(".degree").eq(i).text(roles[i]);
        $(".num").eq(i).text(i+1+"号");
    }
});
var menu = {
    //当前状态
    currentState: 'first_day',

    //绑定事件
    initialize: function() {
        var self = this;
        self.on("click", self.transition);
    },

    //转换状态
    transition: function () {
        switch (this.currentState) {
            case "";
        }
    }
};
