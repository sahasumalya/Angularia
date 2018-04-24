'use strict';

describe('Service: professions', function () {

  // load the service's module
  beforeEach(module('freshAngularApp'));

  // instantiate service
  var professions;
  beforeEach(inject(function (_professions_) {
    professions = _professions_;
  }));

  it('should do something', function () {
    expect(!!professions).toBe(true);
  });

});
