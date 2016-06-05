'use strict';

describe('Service: mapstyle', function () {

  // load the service's module
  beforeEach(module('arboretumApp'));

  // instantiate service
  var mapstyle;
  beforeEach(inject(function (_mapstyle_) {
    mapstyle = _mapstyle_;
  }));

  it('should do something', function () {
    expect(!!mapstyle).toBe(true);
  });

});
