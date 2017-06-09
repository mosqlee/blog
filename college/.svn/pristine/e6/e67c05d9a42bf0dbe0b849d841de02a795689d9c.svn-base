
app.directive('repeatFinish',function(){
  return {
    scope: false,
    restrict:'AE',
    // replace:false,
    // templateUrl:'js/directives/carousel/carousel.html',
    link: function(scope,ele,attrs) {
      if(scope.$last == true){
        console.log('repeat渲染完毕');
        var unslide = $(".banner").unslider({dots:true,delay: 3000,});
        var unslider = unslide.data('unslider');
        $(".unslider-arrow").click(function(){
          var fn = this.className.split(' ')[1];
          unslider[fn]();
        })
      }
    }
  }
})
// 传值进去
app.directive('carousel',['getModule',function(getModule){
  return {
    scope: false,
    restrict:'AE',
    // replace:false,
    // templateUrl:'js/directives/carousel/carousel.html',
    link: function(scope,ele,attrs) {
      var promise = getModule.getModule;
      scope.carousel = function(){
        promise(8,1,100).then(function(res){
          scope.data = res.data.data;
          console.log(scope.data)
        })
      };
      scope.carousel();
    }
  }
}])