/**
 * Created by Administrator on 2017-6-3.
 */
app.controller('faculty',function(fakeData){
    var vm=this;
    vm.data=fakeData;
});
app.controller('facultyContent',function(fakeData,$stateParams){
    var vm=this;
    vm.data={};
    vm.facultyContent=function(){
        fakeData.facultyTeacherIntroduceContent.forEach(function(item){
            if ($stateParams.teacherId==item.teacherId){
                vm.data.title=item.title;
                vm.data.content=item.name
            }
        })
    };
    vm.facultyContent();
});