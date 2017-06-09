/**
 * Created by Administrator on 2017/6/3.
 */
app.controller('Events',function($stateParams){
  var vm=this;
  vm.category=3;
  vm.size=9;
  vm.url='main.events';
  if($stateParams.page==null){
    vm.page=1;
  }else {
    vm.page=$stateParams.page
  }
});
app.controller('EventsContent',function(getModule,$stateParams){
  var vm=this;
  var id=$stateParams.id;
  id=parseInt(id);
  //获取数据
  vm.eventContent=function(){
      getModule.getSpecificInfo(id).then(function(res){
        vm.data=res.data.data
      })
  };
  vm.eventContent();
});