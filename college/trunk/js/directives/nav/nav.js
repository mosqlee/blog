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
      $(".nav-list > li").mouseover(function(){
        clearTimeout(times);
        var index = $(this).index();
        var span = (index === 0) ? 45 : 89;
        var left = (index === 0) ? 43 : (index*133.3)+22;
        span = (index === 7) ? 110 : span;
        left = (index === 7) ? (index*133.3)+9 : left;
        time = setTimeout(function(){
          $(".nav-list >span").animate({left:left+"px",width: span+"px"},"fast");
        },200);
        
      });
      $(".nav-list > li").mouseout(function(){
        times = setTimeout(function(){
          $(".nav-list > span").animate({width: "0"},"fast");
        },200);
        
        clearTimeout(time)
      });
    }
  };
});