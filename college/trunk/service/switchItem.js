/**
 * Created by Administrator on 2017/6/3.
 */
app.service('switchItem',function(){
  this.switchBooleans=function(item){
	if (item==true){
	  item=false
	}else {
	  item=true
	}
	return item
  }
});