// 匹配字符串，用红色替换
app.directive('replaceByRed',function($filter,$timeout){
    return{
        scope:{
            replaceByRed:"="
        },
        link:function(scope,ele,attrs){
            $timeout(function () {
                var text = ele.text();
                if (text.length >= 80){
                    ele.text($filter('limitTo')(text,80)+'...');
                }
                else{
                    ele.text(text);
                }
                var html = ele[0].innerHTML;
                var newHtml = html.replace(scope.replaceByRed, "<span class='active'>$&</span>");
                ele.html(newHtml);
            })
        }
    }
})
// app.directive('finished',function($filter,$timeout){
//     return{
//         scope:{
//             replaceByRed:"="
//         },
//         link:function(scope,ele,attrs){
//              $timeout(function () {
//                 if(scope.$last == true){
//                     scope.$broadcast("to-childs");
//                 }
//             }
//         }
//     }
// })