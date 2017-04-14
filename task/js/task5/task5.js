/**
 * Created by Mosqlee on 2017/4/12.
 */
var user_id,psw,re;
$(document).ready(function() {
    $("#login").bind("click",function() {
        user_id = $(".id").val();
        psw = $(".psw").val();
        $.ajax({
            type: "post",
            url: "http://119.10.57.69:880/carrots-admin-ajax/a/login",
            data: {
                name:user_id,
                pwd:psw
            },
            contentType: "application/x-www-form-urlencoded;charset = utf-8",
            dataType: "json",
            success: function(data) {
                if (data.message == "success") {
                    $("#remind").css("color", "green");
                    $("#remind").text(data.message);
                    window.location.href="http://dev.admin.carrots.ptteng.com/#/login?name=admin&pwd=123456";
                }
                else {
                    $("#remind").text(data.message);
                }
            }
        })
    });
});
// var user = document.getElementById("user");
// var psw = document.getElementsByClassName("psw")[0];
// var btn = document.getElementById("login");
// var remind = document.getElementById("remind");
// var response;
// var re;
// btn.onclick = function() {
//     var request = new XMLHttpRequest();
//     n = user.value;
//     p = psw.value;
//     request.open("post","http://119.10.57.69:880/carrots-admin-ajax/a/login",true);
//     request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     request.send("name="+n+"&pwd="+p);
//     request.onreadystatechange = function() {
//         if(request.readyState ===4 &&request.status === 200) {
//             response = request.responseText;
//             re = JSON.parse(response);
//             remind.innerText = re.message;
//             if (re.message == "success") {
//                 window.location.href="http://dev.admin.carrots.ptteng.com/#/login"
//             }
//         }
//     };
// };
    // ?name=admin&pwd=123456
    //