﻿app.config(["$stateProvider","$urlRouterProvider",routeFn]);
function routeFn($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/main/homepage");
    $stateProvider
        .state("main",{
            url:"/main",
            templateUrl:"views/main.html",
            controller:"main",
            controllerAs:"vm",
            resolve:{
                deps:["$ocLazyLoad",function($ocLazyLoad){
                    return $ocLazyLoad.load("js/controllers/main.js");
                }]
            }
        })
        .state("main.homepage",{
            url:"/homepage",
            templateUrl:"views/homepage.html",
            controller:"homepage",
            controllerAs:"vm",
            resolve:{
                deps:["$ocLazyLoad",function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        "js/directives/carousel/carousel.js",
                        "js/controllers/homepage.js",
                        "css/homepage.css",
                        "vendor/unslider/unslider.min.js",
                        "js/factory/getImg.js",
                        "js/filter/wordOfLength.js"]);
                }]
            }
        })
        .state("main.search",{
            params:{"words":null,"page":null},
            url:"/search?words&page",
            templateUrl:"views/search.html",
            controller:"search",
            controllerAs:"vm",
            resolve:{
                deps:["$ocLazyLoad",function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        "js/controllers/search.js",
                        "css/search.css",
                        "js/directives/replaceByRed/replaceByRed.js",
                        "js/factory/getUrl.js"
                        ]);
                }]
            }
        })
        .state("main.specialtyIntroduce",{
            url:"/specialtyIntroduce",
            templateUrl:"views/specialtyIntroduce.html",
            controllerAs:"vm",
          resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
              return $ocLazyLoad.load([
                "css/collegeFrontStage.css"
              ]);
            }]
          }
        })
        .state("main.faculty",{
          params:{id:null,index:null},
            url:"/faculty",
            templateUrl:"views/faculty.html",
            controller:"Faculty",
            controllerAs:"vm"
        })
        .state("main.faculty.facultyContent",{
            params:{id:null,index:null},
            url:"/facultyContent?id?index",
            templateUrl:"views/facultyContent.html",
            controller:"FacultyContent",
            controllerAs:"vm"
        })
       .state("main.practiceBase",{
          url:"/practiceBase",
          templateUrl:"views/practiceBase.html"
       })
       .state("main.communication",{
           params:{page:null},
           url:"/communication?page",
           templateUrl:"views/communication.html",
           controller:"Communication",
           controllerAs:"vm"
       })
       .state("main.communicationContent",{
            params:{id:null},
            url:"/communicationContent?id",
            templateUrl:"views/communicationContent.html",
            controller:"CommunicationContent",
            controllerAs:"vm"
      })
      .state("main.recruit",{
        params:{id:null,index:null},
        url:"/recruit",
        templateUrl:"views/recruit.html",
        controller:"Recruit",
        controllerAs:"vm"
      })
      .state("main.recruit.recruitContent",{
        params:{id:null,index:null},
        url:"/recruitContent?id&index",
        templateUrl:"views/recruitContent.html",
        controller:"RecruitContent",
        controllerAs:"vm"
      })
      .state("main.events",{
          params:{page:null},
          url:"/events?page",
        templateUrl:"views/events.html",
        controller:"Events",
        controllerAs:"vm"
      })
      .state("main.eventsContent",{
        params:{id:null},
        url:"/eventsContent?id",
        templateUrl:"views/eventsContent.html",
        controller:"EventsContent",
        controllerAs:"vm"
      })
      .state("main.outstandingGraduates",{
        url:"/outstandingGraduates",
        templateUrl:"views/outstandingGraduates.html",
        controller:"OutstandingGraduates",
        controllerAs:"vm"
      })
      .state("main.contactUs",{
        url:"/contactUs",
        templateUrl:"views/contactUs.html"
      })

}