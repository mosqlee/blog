app.controller('search', function($scope,getModule,$stateParams,getUrl,$state){
  var vm = this;
  var promise = getModule.siteSearch;
  vm.words = $stateParams.words;
  vm.page = $stateParams.page? $stateParams.page:1;
  vm.searchGo = function(p,c){
    $state.go(getUrl.getUrl(p),{id:c});
  }
})