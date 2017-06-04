/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-25 14:43:20
 * @version $Id$
 */

var test = angular.module('test',['ngResource','ui.router']);
test.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.when('','/page1');
  $stateProvider
  .state('page1',{
    url:'/page1',
    templateUrl:'page1.html'
  })
  .state('page2',{
    url:'/page2',
    templateUrl: 'page2.html'
  })
})
test.controller('page2', ['', function($scope){
  $scope.homepage = function() {

  }
}]);
test.directive('carousel',function(){
  return{
    restrict:'AE',
    scope:{},
    replace: true,
    template: '<div class="banner" id="b04">'+
    '<ul>'+
    '<li><img src="../img/zzw-banner1.png" alt="" width="640" height="480" ></li>'+
    '<li><img src="../img/zzw-banner2.png" alt="" width="640" height="480" ></li>'+
    '<li><img src="../img/zzw-banner3.png" alt="" width="640" height="480" ></li>'+
    '</ul>'+
    '<a href="javascript:void(0);" class="unslider-arrow04 prev"><img class="arrow" id="al" src="arrowl.png" alt="prev" width="20" height="35"></a>'+
    '<a href="javascript:void(0);" class="unslider-arrow04 next"><img class="arrow" id="ar" src="arrowr.png" alt="next" width="20" height="37"></a>'+
    '</div>',
    link: function(scope,el,attr){
      var unslider04 = $('#b04').unslider({
        dots: true
      }),
     data04 = unslider04.data('unslider');
     
     $('.unslider-arrow04').click(function() {
        var fn = this.className.split(' ')[1];
        data04[fn]();
      });
    }
  }
});