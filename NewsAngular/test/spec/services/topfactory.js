'use strict';

describe('Service: topFactory', function () {

  // load the service's module
  beforeEach(module('newsAngularApp'));

  // instantiate service
  var topFactory;
  beforeEach(inject(function (_topFactory_) {
    topFactory = _topFactory_;
  }));

  it('should do something', function () {
    expect(!!topFactory).toBe(true);
  });

});
