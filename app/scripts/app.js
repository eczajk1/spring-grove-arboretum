'use strict';

/**
 * @ngdoc overview
 * @name arboretumApp
 * @description
 * # arboretumApp
 *
 * Main module of the application.
 */
angular
  .module('arboretumApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui-leaflet'
  ])
  .config(function ($routeProvider) {
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
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl',
        controllerAs: 'mmap'
      })
      .when('/outreach', {
        templateUrl: 'views/outreach.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/catonsville-tree-canopy', {
        templateUrl: 'views/catonsville-tree-canopy.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
