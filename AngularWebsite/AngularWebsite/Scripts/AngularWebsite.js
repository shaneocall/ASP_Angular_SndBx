﻿var AngularWebsite = angular.module('AngularWebsite', ['ngRoute']);

AngularWebsite.controller('LandingPageController', LandingPageController);
AngularWebsite.controller('LoginController', LoginController);
AngularWebsite.controller('RegisterController', RegisterController);

AngularWebsite.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
AngularWebsite.factory('LoginFactory', LoginFactory);
AngularWebsite.factory('RegistrationFactory', RegistrationFactory);

var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/one'
        })
        .when('/routeTwo/:donuts', {
            templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        })
        .when('/login', {
            templateUrl: '/Account/Login',
            controller: LoginController
        })
        .when('/register', {
            templateUrl: '/Account/Register',
            controller: RegisterController
        });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$routeProvider', '$httpProvider'];

AngularWebsite.config(configFunction);