
/**
 * Created by Administrator on 2017/6/1.
 */

var app = angular.module('college', ["ui.router", "oc.lazyLoad"]);
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider",
    function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;
        app.constant = $provide.constant;
    }]);

app.constant('Modules_Config', [
    {
        name: 'treeControl',
        serie: true,
        files: []
    }
]);
app.config(["$ocLazyLoadProvider","Modules_Config",routeFn]);
function routeFn($ocLazyLoadProvider,Modules_Config){
    $ocLazyLoadProvider.config({
        debug:false,
        events:false,
        modules:Modules_Config
    });
};
