'use strict';

describe('Controller: MapCtrl', function () {

  // load the controller's module
  beforeEach(module('arboretumApp'));

  var MapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MapCtrl = $controller('MapCtrl', {
      $scope: scope,
      mapDefaults: {},
      basemap: { something: 'blarg' }
    });
  }));

  it('should attach an object for layers', function () {
    expect(scope.layers).toBeDefined();
  });
});
