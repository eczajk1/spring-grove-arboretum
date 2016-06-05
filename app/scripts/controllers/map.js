'use strict';

/**
 * @ngdoc function
 * @name arboretumApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the arboretumApp
 */
angular.module('arboretumApp')
  .controller('MapCtrl', function ($scope, mapDefaults, basemap) {
    angular.extend($scope, mapDefaults);
    $scope.layers = {};
    angular.extend($scope.layers, {baselayers: basemap});
  });
