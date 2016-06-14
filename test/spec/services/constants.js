'use strict';

describe('Service: mapDefaults', function () {

  // load the service's module
  beforeEach(module('arboretumApp'));

  // instantiate service
  var mapDefaults;
  beforeEach(inject(function (_mapDefaults_) {
    mapDefaults = _mapDefaults_;
  }));

  it('should do something', function () {
    expect(mapDefaults).toBeDefined();
  });

});
