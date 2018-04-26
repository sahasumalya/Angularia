'use strict';

describe('Service: newsFactory', function () {

  // load the service's module
  beforeEach(module('newsAngularApp'));

  // instantiate service
  var newsFactory;
  beforeEach(inject(function (_newsFactory_) {
    newsFactory = _newsFactory_;
  }));

  it('should do something', function () {
    expect(!!newsFactory).toBe(true);
  });

});
