'use strict';

/**
 * @ngdoc overview
 * @name newsAngularApp
 * @description
 * # newsAngularApp
 *
 * Main module of the application.
 */
angular
  .module('newsAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .run(['$rootScope',function(rs){
    rs.news="";
    rs.click=0;
    rs.num=0;
  }])
  .config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/newsSearch', {
        templateUrl: 'views/newssearch.html',
        controller: 'NewssearchCtrl',
        controllerAs: 'newsSearch'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.hashPrefix('');
  });
