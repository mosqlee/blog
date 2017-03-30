/**
 * Created by mosqlee on 2017/3/28.
 */
var players = document.getElementById("player");
var killer = document.getElementById("killer");
var fammer = document.getElementById("person");
var blur =  document.getElementById("player");
var player;
function play() {
    player = players.value;
    const regex = /^([4-9])|(1[0-8])$/;
    var m = regex.test(player);
    if (m == false) {
        onblur_play()
    }
    else {
        oninput_play()
    }
}
function onblur_play() {
    player = players.value;
         blur.onblur = function () {
             player = players.value;
             if (player < 4||player > 18) {
             killer.firstChild.nodeValue = '';
             fammer.firstChild.nodeValue = '';
             alert("请输入正确数量")
             }
             else {
                 return false
             }
         }
}
//自动根据value值改变杀手和平民人数
function oninput_play() {
    player = players.value;
    killer.firstChild.nodeValue = Math.ceil(player / 4);
    fammer.firstChild.nodeValue = player - killer.firstChild.nodeValue;
}
//发牌，创建一个跟输入数字一样长度的数组，里面包括0和1,1代表杀手，0代表平民任务二暂时用不到
    function send_card() {
        var player = players.value;
        var per = new Array(player);
        var roles = [];
        for (var i = 0; i < player; i++) {
            if (Math.ceil(player / 4) == 1) {
                if (i == 0) {
                    per[i] = 1;
                }
                else {
                    per[i] = 0;
                }
            }
            else if (Math.ceil(player / 4) == 2) {
                if (i <= 1) {
                    per[i] = 1;
                }
                else {
                    per[i] = 0;
                }
            }
            else if (Math.ceil(player / 4) == 3) {
                if (i <= 2) {
                    per[i] = 1;
                }
                else {
                    per[i] = 0;
                }
            }
            else if (Math.ceil(player / 4) == 4) {
                if (i <= 3) {
                    per[i] = 1;
                }
                else {
                    per[i] = 0;
                }
            }

            else if (Math.ceil(player / 4) == 5) {
                if (i <= 3) {
                    per[i] = 1;
                }
                else {
                    per[i] = 0;
                }
            }

        }
        per.sort(function () {
            return Math.random() > .5 ? -1 : 1;
        });
        for (var k = 0; k < player; k++) {
            if (per[k] == 1) {
                roles[k] = "杀手";
                alert(roles[k])
            }
            else {
                roles[k] = "平民";
                alert(roles[k])
            }
        }
        return roles;
    }


