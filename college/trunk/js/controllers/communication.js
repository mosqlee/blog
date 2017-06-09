/**
 * Created by Administrator on 2017/6/3.
 */
app.controller('Communication',function($stateParams){
  var vm=this;
  vm.category=2;
  vm.size=9;
  vm.url='main.communication';
  if($stateParams.page==null){
    vm.page=1;
  }else {
    vm.page=$stateParams.page
  }
});
app.controller('CommunicationContent',function(getModule,$stateParams){
  var vm=this;
  var id=$stateParams.id;
  id=parseInt(id);
  //获取数据
  vm.communicationContent=function(){
    getModule.getSpecificInfo(id).then(function(res){
      vm.data=res.data.data;
    })

  };
  vm.communicationContent();
});