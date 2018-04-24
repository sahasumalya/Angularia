'use strict';

describe('Service: check', function () {

  // load the service's module
  beforeEach(module('freshAngularApp'));

  // instantiate service
  var check;
  beforeEach(inject(function (_check_) {
    check = _check_;
  }));

  it('should do something', function () {
    expect(!!check).toBe(true);
  });

});
