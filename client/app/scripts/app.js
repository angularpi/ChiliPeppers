'use strict';

angular.module('chiliPeppersApp', ['ui.router','ngResource','ngDialog', 'ngCookies'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                      templateUrl : 'views/header.html',
                    },
                    'content': {
                        templateUrl : 'views/main.html',
                        controller  : 'MainCtrl'
                    },
                    'footer': {
                      templateUrl : 'views/footer.html'
                    }
                }
              })
        $urlRouterProvider.otherwise('/');
    })
;
