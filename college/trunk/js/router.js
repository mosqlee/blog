// This file is used as router&lazyloader
app.config(["$stateProvider","$urlRouterProvider",routeFn]);
function routeFn($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise("/pageTab");
  $stateProvider
    .state("pageTab",{
      url:"pageTab",
      templateUrl:"views/footer.html",
    })
    .state("pageTab.footer",{
      url:"pageTab/footer",
      templateUrl:"views/footer.html",
      controller:"footer",
      controllerAs:"vm",
      resolve:{
        deps:["$ocLazyLoad",function($ocLazyLoad){
          return $ocLazyLoad.load("");
        }]
      }
    })
}