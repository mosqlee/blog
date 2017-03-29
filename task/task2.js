/**
 * Created by mosqlee on 2017/3/28.
 */
var player;
function play() {
    player = document.getElementById("player").value;
    var killer = document.getElementById("killer");
    var fammer = document.getElementById("person");

    const regex = /^([4-9])|(1[0-8])$/;
    var m = regex.test(player);
    if (m == false) {
        alert("请正确输入玩家数量");
    }
    else {
        killer.firstChild.nodeValue = Math.ceil(player/4);
        fammer.firstChild.nodeValue = player - killer.firstChild.nodeValue;
    }
    // //还可以取余
    // if (player >= 3&&player <= 8) {
    //     killer.firstChild.nodeValue = (player/4);
    //     fammer.firstChild.nodeValue = player - killer.firstChild.nodeValue;
    // }
    // else if ( player >= 9&&player <= 11) {
    //     killer.firstChild.nodeValue = 2;
    //     fammer.firstChild.nodeValue = player - killer.firstChild.nodeValue;
    // }
    // else if ( player >= 12&&player <= 15) {
    //     killer.firstChild.nodeValue = 3;
    //     fammer.firstChild.nodeValue = player - killer.firstChild.nodeValue;
    // }
    // else if ( player >= 16&&player <= 18) {
    //     killer.firstChild.nodeValue = 4;
    //     fammer.firstChild.nodeValue = player - killer.firstChild.nodeValue;
    //     // clock(time = false)
    // }
    // else {
    //     return alert("请正确输入玩家数量")
    // }
}
function control() {
    var player = document.getElementById("player").value;
    if (player !== 12) {
        play()
    }
}
//     clock(time = true)
// }
// function clock(time) {
//     if (time) {
//         t2 = setInterval("control();", 1000);
//     }
//     else {
//         clearInterval(t2)
//     }
// }


function send_card() {
    var player = document.getElementById("player").value;
    var per = new Array(player);
    var roles = [];
    for (var i = 0; i < player; i++) {
        if (player >= 4 && player <= 5) {
            if (i == 0) {
                per[i] = 1;
            }
            else {
                per[i] = 0;
            }
        }
        else if (player >= 6 && player <= 8) {
            if (i <= 1) {
                per[i] = 1;
            }
            else {
                per[i] = 0;
            }
        }
        else if (player >= 9  && player <= 11) {
            if (i <= 2) {
                per[i] = 1;
            }
            else {
                per[i] = 0;
            }
        }
        else if (player >= 12 && player <= 15) {
            if (i <= 3) {
                per[i] = 1;
            }
            else {
                per[i] = 0;
            }
        }

        else if (player >= 16 && player <= 18) {
            if (i <= 3) {
                per[i] = 1;
            }
            else {
                per[i] = 0;
            }
        }

    }
    per.sort(function () {return Math.random() > .5 ? -1 : 1;});
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


