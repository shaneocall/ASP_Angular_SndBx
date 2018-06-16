var AngularWebsite = angular.module('AngularWebsite', ['ngRoute']);

AngularWebsite.controller('LandingPageController', LandingPageController);
AngularWebsite.controller('LoginController', LoginController);

AngularWebsite.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);

var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider.
        when('/routeOne',
            {
                templateUrl: 'routesDemo/one'
            })
        .when('/routeTwo/:donuts',
            {
                templateUrl: function(params) {return 'routesDemo/two?donuts=' + params.donuts;}
        })
        .when('/routeThree',
            {
                templateUrl: 'routesDemo/three'
            })

        .when('/login?returnUrl',
            {
                templateUrl: '/Account/login',
                controller: LoginController
            });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}

configFunction.$inject = ['$routeProvider'];

AngularWebsite.config(configFunction);