app.factory('getImg',function(){
  return {
    getImg:
    function (attr,arr){
      var keepGoing = true;
      var attri;
      angular.forEach(attr, function(item){
        if(!!item.img&&keepGoing&&item.status !== 1){
          keepGoing = false;
          return attri = item[arr];
        }
      })
      return attri;
    }
  }
})