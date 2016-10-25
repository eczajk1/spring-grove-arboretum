'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('arboretumApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should be a thing', function () {
    expect(AboutCtrl).toBeDefined();
  });
});
