'use strict';

describe('Service: checking', function () {

  // instantiate service
  var checking,
    init = function () {
      inject(function (_checking_) {
        checking = _checking_;
      });
    };

  // load the service's module
  beforeEach(module('freshAngularApp'));

  it('should do something', function () {
    init();

    expect(!!checking).toBe(true);
  });

  it('should be configurable', function () {
    module(function (checkingProvider) {
      checkingProvider.setSalutation('Lorem ipsum');
    });

    init();

    expect(checking.greet()).toEqual('Lorem ipsum');
  });

});
