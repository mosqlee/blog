//请求地址
app.service('ajaxAddress',function(){
  //模块请求地址

  this.getModuleAddress='/a/message/search';
	  //获取具体信息
	this.getSpecificInfo='/a/message/';
	// 站内搜索
	this.siteSearch = '/a/global/search';
});

app.service('getModule',function(ajaxAddress,$http,$q){
  //请求各模块
  this.getModule=function(category,page,size){
	var defer=$q.defer();
	defer.resolve(
	  $http({
	  method:'GET',
	  url:ajaxAddress.getModuleAddress+'?category='+category+'&page='+page+'&size='+size
	}));
	return defer.promise;
	};
	this.getSpecificInfo=function(id){
		var defer=$q.defer();
		defer.resolve(
			$http({
				method:'GET',
				url:ajaxAddress.getSpecificInfo+id
			})
		);
		return defer.promise;
	};
	this.siteSearch = function(words,page,size){
		var defer = $q.defer();
		defer.resolve(
		  $http({
			  method:'GET',
			  url:ajaxAddress.siteSearch+'?words='+words+'&page='+page+'&size='+size
			}));
		return defer.promise;
	}
});