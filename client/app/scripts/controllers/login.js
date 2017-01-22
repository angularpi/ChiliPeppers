'use strict';

// DOES NOT WORK!!!

angular.module('chilliPeppersApp')
  .controller('LoginCtrl', ['$scope', '$route', 'ngDialog', '$localStorage', 'AuthFactory'], function ($scope, $route, ngDialog, $localStorage, AuthFactory) {
    $scope.loginData = $localStorage.getObject('userinfo','{}');

        $scope.doLogin = function() {
            if($scope.rememberMe)
               $localStorage.storeObject('userinfo',$scope.loginData);

            AuthFactory.login($scope.loginData);

            ngDialog.close();

        };

        $scope.openRegister = function () {
            ngDialog.open({ template: 'views/register.html', scope: $scope, className: 'ngdialog-theme-default', controller:"RegisterController" });
    };
  });
