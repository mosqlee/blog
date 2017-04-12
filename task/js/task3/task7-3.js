/**
 * Created by Mosqlee on 2017/4/11 17:43
 */
var storage = window.sessionStorage;
var play = storage.player;
var player_data = JSON.parse(play);
var r = storage.roles;
roles = JSON.parse(r);
var killer = 0,person = 0;
var game_reports = $("#game-report");
var report = game_reports.html();
//记录活着的杀手和平民
function survival() {
    for(var i =0;i <player_data.killer_person_alive.length;i++) {
        if (player_data.killer_person_alive[i].role == 1&&
            player_data.killer_person_alive[i].alive == 1) {
            killer++
        }
        else if (player_data.killer_person_alive[i].role == 0&&
            player_data.killer_person_alive[i].alive == 1) {
            person++
        }
    }
}
function game_report() {
    for(var i = 0;i <= player_data.day;i++) {
        $(".date").eq(i).text("第"+(i+1)+"天");
        //平安夜判断
        if (player_data.number_kill[i] < 0) {
            $(".night").eq(i).text("昨夜是平安夜");
        }
        else if (player_data.number_kill[i] >= 0) {
            $(".night").eq(i).text("黑夜："+(player_data.number_kill[i]+1)+"号被杀手杀死，"
                +(player_data.number_kill[i]+1)+"号是"+roles[player_data.number_kill[i]]);

        }
        if (player_data.number_vote[i] >= 0) {
            $(".daytime").eq(i).text("白天：" + (player_data.number_vote[i] + 1) + "号被投死，"
                + (player_data.number_vote[i]+1) + "号是" + roles[player_data.number_vote[i]]);
        }
        else if(player_data.number_vote[i] < 0) {
            $(".daytime").eq(i).text("");
        }
    }
}
//循环创建天数
function days() {
    for(var x = 0;x < player_data.day;x++) {
        game_reports.append(report)
    }
}
$("body").ready(function() {
    survival();
    $("#killer").text("杀手" + killer + "人");
    $("#person").text("平民" + person + "人");
    days();
    game_report()
});
