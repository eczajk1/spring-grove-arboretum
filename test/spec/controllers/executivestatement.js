'use strict';

describe('Controller: ExecutivestatementCtrl', function () {

  // load the controller's module
  beforeEach(module('arboretumApp'));

  var ExecutivestatementCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExecutivestatementCtrl = $controller('ExecutivestatementCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should be a thing', function () {
    expect(ExecutivestatementCtrl).toBeDefined();
  });
});
