/**
 * Created by Administrator on 2017-6-7.
 */
app.controller('OutstandingGraduates',function(getModule){
    var vm=this;
    vm.category=1;
    vm.page='';
    vm.size='';
    vm.getGraduatesList=function(){
        getModule.getModule(vm.category,vm.page,vm.size).then(function(res){
          vm.data=res.data.data
        })
    };
    vm.getGraduatesList()
});