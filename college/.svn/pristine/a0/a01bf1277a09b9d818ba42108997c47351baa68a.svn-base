app.directive('nav', function($state,$location){
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    // scope: {}, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    // template: '',
    // templateUrl: '',
    // replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function($scope, iElm, iAttrs, controller) {
      var time;
      var times;
      var num;
      // 根据路由
      var pathUrl = $location.path();
      switch (pathUrl) {
        case "/main/homepage":
          num = 0;
          break;
        case "/main/specialtyIntroduce":
          num = 1;
          break;
        case "/main/faculty":
          num = 2;
          break;
        case "/main/faculty/facultyContent":
          num = 2;
          break;
        default:
          console.log("错啦")
          break;
      }

      $("li").mouseover(function(){
        clearTimeout(times);
        var span = 133.33;
        var left = $(this).index()*span+15;
        time = setTimeout(function(){
          $("span").animate({left:left+"px",width: "133.33px"},"fast");
        },200);
        
      });
      $("li").mouseout(function(){
        times = setTimeout(function(){
          $("span").animate({width: "0"},"fast");
        },200);
        
        clearTimeout(time)
      });
    }
  };
});