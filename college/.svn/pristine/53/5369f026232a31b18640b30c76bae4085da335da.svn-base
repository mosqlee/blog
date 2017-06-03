app.directive('homepage', ['', function(){
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    scope: {}, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    // template: '',
    templateUrl: 'js/directives/homepage/setAsHomepage.html',
    replace: false,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function(scope, iElm, iAttrs, controller) {
      scope.favorite = function(){
        var ctrl = (navigator.userAgent.toLowerCase()).indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL';  
        if (document.all) {  
          window.external.addFavorite('http://www.baidu.com', '百度')  
        } 
        else if (window.sidebar) {  
          window.sidebar.addPanel('百度', 'http://www.baidu.com', "")  
        } 
        else {　　　　//添加收藏的快捷键  
          alert('添加失败\n您可以尝试通过快捷键' + ctrl + ' + D 加入到收藏夹~')  
        }  
      };
    }
  };
}]);