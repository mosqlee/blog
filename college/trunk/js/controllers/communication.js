/**
 * Created by Administrator on 2017/6/3.
 */
app.controller('Communication',function(fakeData){
  var vm=this;
  //获取数据
  vm.communication=fakeData.communicationContent;
});
app.controller('CommunicationContent',function(fakeData,$stateParams){
  var vm=this;
  //获取数据
  vm.data={};
  vm.communicationContent=function(){
    fakeData.communicationContent.forEach(function(item){
      if ($stateParams.id==item.id){
        vm.data.title=item.title;
        vm.data.content=item.content
      }
    })
  };
  vm.communicationContent();
});
app.controller('Recruit',function(fakeData){
  var vm=this;
  //获取数据
  vm.data=fakeData.recruitList;
  vm.getId=function(){
    //获取url参数
      vm.id= window.location.href.substring(window.location.href.indexOf('=')+1);
  };
  vm.getId();
  vm.getSelected=function(id){
    vm.id=id
  }
});
app.controller('RecruitContent',function($rootScope,fakeData,$stateParams){
  var vm=this;
  vm.data={};
  //获取文本内容
  vm.facultyContent=function(){
    fakeData.recruitContent.forEach(function(item){
      if ($stateParams.id==item.id){
        vm.data.content=item.content
      }
    })
  };
  vm.facultyContent();
});
app.controller('Events',function(fakeData){
  var vm=this;
  //获取数据
  vm.communication=fakeData.communicationContent;
});
app.controller('EventsContent',function(fakeData,$stateParams){
  var vm=this;
  //获取数据
  vm.data={};
  vm.communicationContent=function(){
    fakeData.communicationContent.forEach(function(item){
      if ($stateParams.id==item.id){
        vm.data.title=item.title;
        vm.data.content=item.content
      }
    })
  };
  vm.communicationContent();
});